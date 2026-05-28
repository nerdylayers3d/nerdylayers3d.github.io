import { visit } from "unist-util-visit";

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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
        } else {
          // Wiki-link: [[Page Name]] or [[Page Name|Display Text]]
          const display = alias || target;
          const slug = slugify(target);
          parts.push({
            type: "link",
            url: `/components/${slug}`,
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
