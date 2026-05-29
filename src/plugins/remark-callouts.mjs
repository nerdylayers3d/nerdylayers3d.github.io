import { visit } from "unist-util-visit";

const CALLOUT_RE = /^\[!(\w+)\]\s*(.*)$/;

/**
 * Transforms Obsidian-style callouts into styled HTML blocks:
 *   > [!warning] Title
 *   > body line 1
 *   > body line 2
 * becomes
 *   <div class="callout callout-warning"><div class="callout-title">Title</div><div class="callout-body">...</div></div>
 */
export function remarkCallouts() {
  return (tree) => {
    visit(tree, "blockquote", (node, index, parent) => {
      if (!parent || index === null) return;
      const first = node.children?.[0];
      if (!first || first.type !== "paragraph") return;
      const firstText = first.children?.[0];
      if (!firstText || firstText.type !== "text") return;

      const match = firstText.value.match(CALLOUT_RE);
      if (!match) return;

      const type = match[1].toLowerCase();
      const titleText = match[2].trim();

      // Strip the [!type] marker from the first text node. If a title was present
      // on the same line, keep it; if not, drop the empty paragraph entirely.
      if (titleText) {
        firstText.value = titleText;
      } else {
        first.children.shift();
        // If the paragraph still has children (e.g. a line break + more text), keep it; otherwise drop.
        if (first.children.length === 0) {
          node.children.shift();
        } else if (first.children[0]?.type === "text") {
          // Trim leading whitespace from now-first text node
          first.children[0].value = first.children[0].value.replace(/^\s+/, "");
        }
      }

      const titleNode = {
        type: "paragraph",
        data: { hName: "div", hProperties: { className: ["callout-title"] } },
        children: [{ type: "text", value: titleText || defaultTitle(type) }],
      };

      // Title was on the same line as [!type]; drop the now-empty first paragraph
      // from the body to avoid an awkward empty space at the top of the callout.
      if (titleText) {
        node.children.shift();
      }

      const calloutNode = {
        type: "blockquote",
        data: {
          hName: "div",
          hProperties: { className: ["callout", `callout-${type}`] },
        },
        children: [titleNode, ...node.children],
      };

      parent.children.splice(index, 1, calloutNode);
    });
  };
}

function defaultTitle(type) {
  const titles = {
    note: "Note",
    info: "Info",
    tip: "Tip",
    success: "Success",
    question: "Question",
    warning: "Warning",
    failure: "Failure",
    danger: "Danger",
    bug: "Bug",
    example: "Example",
    quote: "Quote",
    important: "Important",
    abstract: "Summary",
    todo: "Todo",
  };
  return titles[type] || type.charAt(0).toUpperCase() + type.slice(1);
}
