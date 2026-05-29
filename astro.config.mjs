// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { remarkWikiLinks } from "./src/plugins/remark-wiki-links.mjs";
import { remarkCallouts } from "./src/plugins/remark-callouts.mjs";
import { remarkExternalLinks } from "./src/plugins/remark-external-links.mjs";
import { remarkStripInternal } from "./src/plugins/remark-strip-internal.mjs";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // remarkStripInternal must run BEFORE the others so the stripped sections
    // don't get processed at all (saves work, and prevents wiki-links/callouts
    // inside internal sections from creating dangling references).
    remarkPlugins: [remarkStripInternal, remarkWikiLinks, remarkCallouts, remarkExternalLinks],
  },
});
