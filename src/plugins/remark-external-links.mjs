import { visit } from "unist-util-visit";

/**
 * Add target="_blank" and rel="noopener noreferrer" to any markdown link
 * whose URL is absolute (http://, https://, or protocol-relative //).
 * Relative links (e.g. /robots/lucile, /components/foo) stay in the same tab.
 */
export function remarkExternalLinks() {
  return (tree) => {
    visit(tree, "link", (node) => {
      const url = node.url || "";
      const isExternal = /^(https?:)?\/\//.test(url);
      if (!isExternal) return;

      node.data = node.data || {};
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        target: "_blank",
        rel: "noopener noreferrer",
      };
    });
  };
}
