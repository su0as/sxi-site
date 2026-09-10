/*
 * Runs after `vite build`. For each markdown post under
 * src/content/writings/, this:
 *   1. Writes a pre-rendered dist/writings/<slug>/index.html - a copy of
 *      the built index.html with per-post title, canonical, Open Graph and
 *      Twitter card tags plus Article JSON-LD, so link unfurlers and
 *      crawlers that don't execute JS still see correct per-post metadata.
 *      The same JS bundle loads from that file, so React still hydrates it
 *      into the live, interactive post page (see App.tsx's path-based
 *      PostPage routing).
 *   2. Generates /rss.xml
 *   3. Generates /sitemap.xml
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const contentDir = join(root, "src/content/writings");
const distDir = join(root, "dist");
const siteUrl = "https://suhasxi.com";

function loadPosts() {
  const files = readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = readFileSync(join(contentDir, file), "utf-8");
      const { data } = matter(raw);
      return data;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function prerenderPost(template, post) {
  const url = `${siteUrl}/writings/${post.slug}`;
  const title = `${post.title} — Suhas Suren`;

  let html = template;
  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeXml(title)}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${escapeXml(post.excerpt)}" />`
  );
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${url}" />`
  );
  html = html.replace(
    /<meta property="og:type" content=".*?" \/>/,
    `<meta property="og:type" content="article" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${escapeXml(post.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${escapeXml(post.excerpt)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="twitter:title" content=".*?" \/>/,
    `<meta property="twitter:title" content="${escapeXml(post.title)}" />`
  );
  html = html.replace(
    /<meta property="twitter:description" content=".*?" \/>/,
    `<meta property="twitter:description" content="${escapeXml(post.excerpt)}" />`
  );

  const articleLd = `
    <script type="application/ld+json">
      ${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { "@type": "Person", name: post.author || "Suhas Suren" },
        url,
      })}
    </script>
  `;
  html = html.replace("</head>", `${articleLd}</head>`);

  const outDir = join(distDir, "writings", post.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
}

function generateRss(posts) {
  const items = posts
    .map((post) => {
      const url = `${siteUrl}/writings/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Suhas Suren — Writings</title>
    <link>${siteUrl}/#writings</link>
    <description>Writing on robotics, on-device AI, and building things.</description>
${items}
  </channel>
</rss>
`;
  writeFileSync(join(distDir, "rss.xml"), rss);
}

function generateSitemap(posts) {
  const urls = [
    { loc: `${siteUrl}/`, changefreq: "weekly", priority: "1.0" },
    ...posts.map((post) => ({
      loc: `${siteUrl}/writings/${post.slug}`,
      changefreq: "monthly",
      priority: "0.8",
      lastmod: new Date(post.date).toISOString().split("T")[0],
    })),
  ];

  const body = urls
    .map((u) => {
      const lastmod = u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : "";
      return `  <url>
    <loc>${u.loc}</loc>${lastmod}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
  writeFileSync(join(distDir, "sitemap.xml"), sitemap);
}

const template = readFileSync(join(distDir, "index.html"), "utf-8");
const posts = loadPosts();

for (const post of posts) {
  prerenderPost(template, post);
}
generateRss(posts);
generateSitemap(posts);

console.log(`postbuild: pre-rendered ${posts.length} post(s), rss.xml, sitemap.xml`);
