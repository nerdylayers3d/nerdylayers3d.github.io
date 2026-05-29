import { visit } from "unist-util-visit";

// Match the marker on the first line of the text node. The text node may
// contain a trailing "\n<rest of body>" because markdown collapses soft line
// breaks into the same text node, so we match only up to the first newline
// or end-of-string.
const CALLOUT_RE = /^\[!(\w+)\]\s*([^\n]*)/;

/**
 * Transforms Obsidian-style callouts into styled HTML blocks:
 *   > [!warning] Title
 *   > body line 1
 *   > body line 2
 * becomes
 *   <div class="callout callout-warning"><div class="callout-title">Title</div>body...</div>
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
      const markerLength = match[0].length;

      // The remainder of firstText.value AFTER the marker (could be "" or "\n<body>...").
      // If it begins with a newline, strip the newline; what's left is body text that
      // should become the start of the body's first paragraph.
      let remainder = firstText.value.slice(markerLength);
      if (remainder.startsWith("\n")) remainder = remainder.slice(1);

      // Rebuild the body paragraph children: [text(remainder), ...rest of first paragraph]
      // (only if remainder is non-empty), then any subsequent paragraphs/lists/etc.
      const restOfFirstParaChildren = first.children.slice(1);
      const bodyFirstParaChildren = [];
      if (remainder.length > 0) {
        bodyFirstParaChildren.push({ type: "text", value: remainder });
      }
      bodyFirstParaChildren.push(...restOfFirstParaChildren);

      const titleNode = {
        type: "paragraph",
        data: { hName: "div", hProperties: { className: ["callout-title"] } },
        children: [{ type: "text", value: titleText || defaultTitle(type) }],
      };

      const bodyChildren = [];
      if (bodyFirstParaChildren.length > 0) {
        bodyChildren.push({ type: "paragraph", children: bodyFirstParaChildren });
      }
      bodyChildren.push(...node.children.slice(1));

      const calloutNode = {
        type: "blockquote",
        data: {
          hName: "div",
          hProperties: { className: ["callout", `callout-${type}`] },
        },
        children: [titleNode, ...bodyChildren],
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
