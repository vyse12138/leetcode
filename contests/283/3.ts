/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  let root = new TreeNode(descriptions[0][0])

  if (descriptions[0][2]) {
    root.left = new TreeNode(descriptions[0][1])
  } else {
    root.right = new TreeNode(descriptions[0][1])
  }
}
