/**
 * Strip the very first H1 from the markdown body when it appears at the top.
 *
 * The page templates render their own H1 (from frontmatter title, first body H1,
 * or a humanised slug). When the source markdown also starts with an H1, both
 * render side-by-side. This plugin removes the redundant top-of-body H1 so
 * there's a single H1 per page.
 *
 * "Top" means the first non-empty block in the document. Pages whose first H1
 * appears mid-document (e.g. inside a section) are left untouched.
 */
export function remarkStripFirstH1() {
  return (tree) => {
    if (!Array.isArray(tree.children) || tree.children.length === 0) return;
    const first = tree.children[0];
    if (first?.type === "heading" && first.depth === 1) {
      tree.children.shift();
    }
  };
}
