// Time complexity: O(n)
// Space complexity: O(n)
function isBalanced(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode): number => {
    if (node === null) {
      return 0
    }
    let left = dfs(node.left)
    if (left === -1) return -1

    let right = dfs(node.right)
    if (right === -1) return -1

    return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1
  }

  return dfs(root) !== -1
}
