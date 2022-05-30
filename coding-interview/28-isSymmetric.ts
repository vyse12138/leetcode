// Time complexity: O(n)
// Space complexity: O(n)
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return null
  const dfs = (left: TreeNode, right: TreeNode): boolean => {
    if (!left && !right) return true
    if (!left || !right || left.val !== right.val) return false

    return dfs(left.left, right.right) && dfs(left.right, right.left)
  }
  return dfs(root.left, root.right)
}
