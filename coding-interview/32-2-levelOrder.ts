// Time complexity: O(n)
// Space complexity: O(n)
function levelOrder2(root: TreeNode | null): number[][] {
  if (!root) return []
  const res: number[][] = []
  const queue: TreeNode[] = [root]
  while (queue.length) {
    let length = queue.length
    let temp: number[] = []
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      temp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(temp)
  }

  return res
}
