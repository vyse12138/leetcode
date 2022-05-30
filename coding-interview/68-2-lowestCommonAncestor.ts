// Time complexity: O(n)
// Space complexity: O(1)
function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const dfs = (node: TreeNode | null) => {
    if (!node || node === p || node === q) return node
    let left = dfs(node.left)
    let right = dfs(node.right)

    if (!left && !right) return null
    if (!left) return right
    if (!right) return left

    return node
  }

  return dfs(root)
}
