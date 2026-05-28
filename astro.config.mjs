// @ts-check
import { defineConfig } from "astro/config";
import { remarkWikiLinks } from "./src/plugins/remark-wiki-links.mjs";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkWikiLinks],
  },
});
