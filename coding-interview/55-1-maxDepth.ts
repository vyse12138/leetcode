// Time complexity: O(n)
// Space complexity: O(n)
function maxDepth(root: TreeNode | null): number {
  let max = 0
  const dfs = (node: TreeNode, depth: number) => {
    if (node === null) return
    max = Math.max(max, depth)
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }

  dfs(root, 1)
  return max
}
