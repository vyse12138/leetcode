// Time complexity: O(n)
// Space complexity: O(n)
function serialize(root) {
  if (!root) return ''
  const queue = [root]
  const res = []
  while (queue.length) {
    let node = queue.shift()
    if (node !== null) {
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      res.push('null')
    }
  }
  return res.join()
}

function deserialize(data) {
  if (!data) return null

  let vals = data.split(',').map(e => (e = e === 'null' ? null : e - 0))

  let root = new TreeNode(vals[0])

  let queue = [root]
  let i = 1
  while (queue.length) {
    let node = queue.shift()

    if (vals[i] !== null) {
      node.left = new TreeNode(vals[i])
      queue.push(node.left)
    }
    i++

    if (vals[i] !== null) {
      node.right = new TreeNode(vals[i])
      queue.push(node.right)
    }
    i++
  }
  return root
}
