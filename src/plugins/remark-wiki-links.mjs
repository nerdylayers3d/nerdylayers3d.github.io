import { visit } from "unist-util-visit";
import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Mirror of slugify() in src/lib/utils.ts — kept here to avoid an .mjs↔.ts
 * import dance. Astro's content-collection IDs drop punctuation entirely
 * (no separator); we mimic that so [[wikilink]] targets resolve.
 */
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[.,()'"`!?:;@#$%^&*+=<>{}\[\]\\|]/g, "")
    // Each non-alphanumeric char → single hyphen (don't collapse runs;
    // Astro keeps double-hyphens for double-spaces, etc.)
    .replace(/[^a-z0-9]/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

// Discover which slugs belong to the robots collection so [[Lucille MK2]] in
// markdown body resolves to /robots/lucille-mk2/ instead of /components/...
// Falls back to empty set if the directory isn't readable (e.g. mid-build).
let _robotSlugs = null;
function getRobotSlugs() {
  if (_robotSlugs) return _robotSlugs;
  const set = new Set();
  try {
    const dir = path.resolve(process.cwd(), "src/content/robots");
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith(".md")) continue;
      set.add(slugify(f.replace(/\.md$/, "")));
    }
  } catch {
    // ignore
  }
  _robotSlugs = set;
  return set;
}

export function remarkWikiLinks() {
  return (tree) => {
    visit(tree, "text", (node, index, parent) => {
      if (!parent || index === null) return;

      const regex = /(!?)\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(node.value)) !== null) {
        const [full, bang, target, alias] = match;

        if (match.index > lastIndex) {
          parts.push({ type: "text", value: node.value.slice(lastIndex, match.index) });
        }

        if (bang === "!") {
          // Image embed: ![[path/to/image]]
          const filename = target.split("/").pop();
          parts.push({
            type: "image",
            url: `/assets/${filename}`,
            alt: alias || filename,
          });
        } else if (target.startsWith("#")) {
          // Heading-anchor wikilink: [[#Section Name]] or [[#Section|alias]]
          // Resolve to an in-page #anchor on the current page.
          const headingText = target.slice(1);
          const display = alias || headingText;
          const slug = slugify(headingText);
          parts.push({
            type: "link",
            url: `#${slug}`,
            children: [{ type: "text", value: display }],
          });
        } else if (target.includes("#")) {
          // Page + heading wikilink: [[Page#Section]]
          const [pageName, ...rest] = target.split("#");
          const headingText = rest.join("#");
          const display = alias || `${pageName} § ${headingText}`;
          const pageSlug = slugify(pageName);
          const headingSlug = slugify(headingText);
          parts.push({
            type: "link",
            url: `/components/${pageSlug}#${headingSlug}`,
            children: [{ type: "text", value: display }],
          });
        } else {
          // Wiki-link: [[Page Name]] or [[Page Name|Display Text]]
          // Resolve to /robots/<slug>/ if the slug matches a known robot page;
          // otherwise fall back to /components/<slug>/.
          const display = alias || target;
          const slug = slugify(target);
          const isRobot = getRobotSlugs().has(slug);
          parts.push({
            type: "link",
            url: `${isRobot ? "/robots" : "/components"}/${slug}`,
            children: [{ type: "text", value: display }],
          });
        }

        lastIndex = match.index + full.length;
      }

      if (parts.length === 0) return;

      if (lastIndex < node.value.length) {
        parts.push({ type: "text", value: node.value.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...parts);
    });
  };
}
