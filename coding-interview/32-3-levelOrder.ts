// Time complexity: O(n)
// Space complexity: O(n)
function levelOrder3(root: TreeNode | null): number[][] {
  if (!root) return []
  let res: number[][] = []

  let queue: TreeNode[] = [root]
  let isNextLineLeft = false

  while (queue.length) {
    let length = queue.length
    let temp: number[] = []
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if (isNextLineLeft) {
        temp.unshift(node.val)
      } else {
        temp.push(node.val)
      }
      node.left && queue.push(node.left)

      node.right && queue.push(node.right)
    }
    res.push(temp)
    isNextLineLeft = !isNextLineLeft
  }

  return res
}
