// @ts-check
import { defineConfig } from "astro/config";
import { remarkWikiLinks } from "./src/plugins/remark-wiki-links.mjs";
import { remarkCallouts } from "./src/plugins/remark-callouts.mjs";
import { remarkExternalLinks } from "./src/plugins/remark-external-links.mjs";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkWikiLinks, remarkCallouts, remarkExternalLinks],
  },
});
