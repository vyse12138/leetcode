// Time complexity: O(n)
// Space complexity: O(n)
function kthLargest(root: TreeNode | null, k: number): number {
  let res = []
  const dfs = (node: TreeNode) => {
    if (node === null) return
    if (node.left) dfs(node.left)
    res.push(node.val)
    if (node.right) dfs(node.right)
  }
  dfs(root)
  return res[res.length - k]
}

// Time complexity: O(n)
// Space complexity: O(n)
function kthLargest2(root: TreeNode | null, k: number): number {
  let res: number
  const dfs = (node: TreeNode) => {
    if (node === null) return
    dfs(node.right)
    if (k === 0) return
    if (--k === 0) res = node.val
    dfs(node.left)
  }
  dfs(root)
  return res
}
