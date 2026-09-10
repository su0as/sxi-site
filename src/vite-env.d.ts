/// <reference types="vite/client" />
import type { WritingFrontmatter } from "./types/writing";

declare module "*.md" {
  export const frontmatter: WritingFrontmatter;
  export const html: string;

  const content: { frontmatter: WritingFrontmatter; html: string };
  export default content;
}
