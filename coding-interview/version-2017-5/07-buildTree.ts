class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null
  }

  let root = new TreeNode(preorder[0])
  let i = inorder.findIndex(node => node === preorder[0])
  root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
  root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))

  return root
}
