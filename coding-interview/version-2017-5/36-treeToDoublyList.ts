// Time complexity: O(n)
// Space complexity: O(1)
function treeToDoublyList(root) {
  if (!root) return null

  const dfs = node => {
    if (!node) return

    dfs(node.left)

    if (pre) {
      pre.right = node
    } else {
      head = node
    }
    node.left = pre
    pre = node

    dfs(node.right)
  }

  let pre = null,
    head = null

  dfs(root)

  head.left = pre
  pre.right = head

  return head
}
