/**
 * Strip sections of markdown marked as internal-only from the rendered output.
 *
 * Wrap a section in HTML comments:
 *
 *   <!-- internal-start -->
 *   ### Build TODO
 *   - [ ] thing 1
 *   ...
 *   <!-- internal-end -->
 *
 * Everything between the comments (inclusive of the comments themselves) is
 * removed before the markdown is rendered. The vault file still has the full
 * content for working purposes.
 *
 * Implementation note: by the time we see the AST, the comments may have been
 * parsed as `html` nodes at the top level. We walk siblings and drop everything
 * between matching markers.
 */
export function remarkStripInternal() {
  const START = /<!--\s*internal-start\s*-->/i;
  const END = /<!--\s*internal-end\s*-->/i;

  return (tree) => {
    if (!Array.isArray(tree.children)) return;

    let i = 0;
    while (i < tree.children.length) {
      const node = tree.children[i];
      const value = node?.value || "";
      const isStart = node?.type === "html" && START.test(value);
      if (!isStart) {
        i++;
        continue;
      }
      // Find matching end marker
      let j = i + 1;
      while (j < tree.children.length) {
        const n2 = tree.children[j];
        if (n2?.type === "html" && END.test(n2.value || "")) break;
        j++;
      }
      // Splice out [i .. j] (inclusive). If no end marker found, drop only the start node.
      const removeCount = j < tree.children.length ? j - i + 1 : 1;
      tree.children.splice(i, removeCount);
      // Do not advance i — the next iteration re-reads at the same index
    }
  };
}
