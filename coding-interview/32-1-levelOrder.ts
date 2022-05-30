// Time complexity: O(n)
// Space complexity: O(n)
function levelOrder(root: TreeNode | null): number[] {
  if (!root) return []
  const res: number[] = []
  const queue: TreeNode[] = [root]
  while (queue.length) {
    let node = queue.shift()
    res.push(node.val)

    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return res
}
