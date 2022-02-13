// Time complexity: O(n)
// Space complexity: O(n)
function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  ;[root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)]
  return root
}
