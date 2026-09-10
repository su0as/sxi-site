---
title: "Getting pose estimation to 30ms on an iPhone 8"
subtitle: "What it actually takes to run a real-time coaching loop on hardware from 2017"
date: 2026-09-10
author: Suhas Suren
slug: pose-estimation-30ms-iphone-8
excerpt: "Shot AI's corrective feedback loop lives or dies on end-to-end latency. Here's what it actually took to hit 30-50ms on-device on hardware from 2017 - and the thermal, quantisation, and profiling lessons that came out of it."
tags: [on-device ML, CoreML, computer vision, edge inference, iOS]
---

I build [Shot AI](https://shotaiapp.com), an iOS app that watches you play and tells you what your body did wrong. It has 250+ paying subscribers and processes 600+ training sessions a month.

The hard part was never the model. It was the deadline.

## The constraint nobody tells you about

Corrective feedback has an expiry date. If you tell someone their elbow dropped 400 milliseconds after it dropped, they have already finished the movement and the correction is abstract. It stops being coaching and becomes a report.

So the whole product hinged on one number: **end-to-end latency under 100 ms**, from photons hitting the sensor to feedback on screen. Not the model's inference time in isolation. The whole loop.

That budget has to cover camera capture, pose estimation, my own inference, feedback logic, and render. Once you subtract everything that isn't the model, you get roughly **30–50 ms** to actually think.

And it has to hold on an iPhone 8, because a meaningful share of my users are not on new hardware.

## Why not just use the cloud

I tried this first. It is the obvious answer and it is wrong for this problem.

A round trip to a server, even a fast one, costs you the entire budget before the model has done anything. Add a gym with bad wifi and you are at multiple seconds. Add the fact that people are pointing a camera at their own bodies and you have a privacy conversation you did not want to have. Add per-inference GPU cost against a subscription price and the unit economics stop working.

On-device solves all four at once. It also means the app works with airplane mode on, which turned out to matter more than I expected.

The tradeoff is that you inherit every constraint of the device: thermal, memory, battery, and whatever silicon the user happened to buy in 2017.

## The pipeline

```
camera capture
  → skeletal pose estimation (Vision framework)
  → CoreML inference
  → feedback logic
  → render
```

Deliberately boring. Every stage is a place latency hides, and the more custom the stage, the harder it is to profile.

Using Apple's Vision framework for the skeletal keypoints rather than rolling my own was the single best decision in the project. It is hardware-accelerated, Apple has already fought the optimisation war, and it freed my entire latency budget for the part that was actually differentiated: interpreting what the joints were doing.

## Where the time actually went

Here is the thing that cost me the most time to learn: **I optimised the wrong stage first.**

I assumed the model was the bottleneck, because the model is the interesting part and interesting parts feel expensive. I spent [FILL: how long — a week? two?] making inference faster before I profiled properly and found that [FILL: which stage was actually dominating — camera pipeline? pixel buffer conversion? the Vision request itself? main-thread contention?] was eating [FILL: what share of the budget].

> **[FILL: Drop your actual profile breakdown here.]** Even rough numbers are worth more than prose. A five-row table of stage vs milliseconds is the most convincing thing in this entire post. Instruments Time Profiler or `os_signpost` will give you this in an afternoon.
>
> | Stage | Time (ms) |
> |---|---|
> | Camera capture → pixel buffer | |
> | Vision pose request | |
> | CoreML inference | |
> | Feedback logic | |
> | Render | |

The lesson generalises: on-device ML performance is usually a systems problem wearing a machine learning costume. The model is one stage in a pipeline and rarely the greediest one.

## Quantisation, and what it cost

[FILL: which precision did you land on — float16? int8? palettised weights?] and the model went from [FILL: size before] to [FILL: size after].

The part worth writing about is not the speedup, it is the damage. Every quantisation post says "negligible accuracy loss" and almost none of them say negligible *at what*.

For me the aggregate metric barely moved, but the failure mode changed shape. [FILL: describe where accuracy actually degraded — was it low-light? fast motion? occluded joints? particular body positions? partial framing?] That is the number that matters, because aggregate accuracy is an average over situations your users are not uniformly distributed across.

> **[FILL: your before/after numbers.]** Even a simple comparison on a held-out set of your own recorded sessions is enough. What I'd want to see as a reader: accuracy before, accuracy after, and one specific case where it got visibly worse.

I also tried pruning. [FILL: did it help, or did the accuracy cost exceed the latency gain? Be honest — "I tried it and reverted it" is a more credible sentence than most of what gets published.]

## The thermal problem

This is the part that surprised me, and it is the part I have seen written about least.

You can hit your latency target in a benchmark and still miss it in production, because **benchmarks run for seconds and users run for minutes**.

A training session is not one inference. It is a continuous loop running for [FILL: typical session length]. Sustained load heats the device, iOS throttles the SoC to protect it, and your carefully tuned 30 ms inference becomes [FILL: what it degraded to] somewhere around [FILL: how many minutes in]. On an iPhone 8, with a smaller thermal envelope and an older process node, this arrives faster and hits harder.

Nothing about this shows up in a cold-start benchmark. You only find it by running the actual session, which is exactly the test people skip.

What I did about it: [FILL: your actual mitigations. Candidates — adaptive frame rate under thermal pressure, dropping inference cadence while keeping capture smooth, monitoring `ProcessInfo.thermalState` and degrading deliberately, batching or skipping frames, reducing resolution mid-session.]

The design principle I landed on: **degrade on purpose, before the OS degrades you.** If you do nothing, the system throttles you unpredictably and the experience falls apart in a way the user reads as the app being broken. If you detect thermal pressure and step down a quality tier yourself, you control which quality you sacrifice and the app stays coherent.

## Graceful degradation as a product feature

The same principle generalised past thermal. Old device, poor lighting, unstable connection — the honest answer is that a real-time CV app will encounter conditions where it cannot do its best work, and pretending otherwise produces failures the user can't interpret.

So I built explicit degradation paths: [FILL: what actually happens on an unsupported device, in bad light, or on a weak connection].

## What the telemetry said

I instrumented the production pipeline for failure-mode analysis: [FILL: what you actually logged — stage timings, thermal state, dropped frames, pose confidence, session abandonment points].

That data is where the real wins came from. Sitting in Instruments tells you what your device does. Telemetry tells you what a thousand devices do, and they disagree.

The specific outcome: **session completion improved by 23%** once I could see where sessions were actually dying rather than where I assumed they were. [FILL: what was the actual cause you found? This is the punchline of the whole post — the one line a reader will remember. Worth being specific.]

## What I'd tell someone starting this

**Profile before you optimise.** I did not, and it cost me weeks. The interesting stage is rarely the expensive stage.

**Benchmark for the duration of a real session, not a single inference.** Cold-start numbers are marketing. Sustained numbers are engineering.

**Treat degradation as a design surface.** You will run out of thermal headroom. Decide in advance what you give up, or the OS decides for you and the user blames your app.

**Aggregate accuracy hides the failure you care about.** Find out where quantisation hurt, not by how much on average.
