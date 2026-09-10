/*
 * Transforms markdown files under src/content/writings/*.md into JS modules
 * at build time: frontmatter is parsed with gray-matter and the body is
 * rendered to static HTML (with GFM tables + build-time syntax highlighting)
 * using marked. None of gray-matter/marked/highlight.js ship to the client -
 * they only run inside this Vite plugin (in Node, at build/dev time). The
 * client only ever receives the resulting `frontmatter` object and `html`
 * string as plain JS.
 */

import matter from "gray-matter";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);
marked.setOptions({ gfm: true });

export function writingsPlugin() {
  return {
    name: "vite-plugin-writings",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".md") || !id.includes("/content/writings/")) return null;

      const { data, content } = matter(code);
      const html = marked.parse(content);

      return {
        code: `export const frontmatter = ${JSON.stringify(data)};\nexport const html = ${JSON.stringify(html)};\nexport default { frontmatter, html };\n`,
        map: null,
      };
    },
  };
}
