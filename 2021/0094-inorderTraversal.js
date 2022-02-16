/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*----- solution 1 -----
Recursion.
Time complexity is O(n) 
Space complexity is O(n)
*/
var inorderTraversal = function (root) {
  const result = [],
    inorder = function (node) {
      if (node == null) {
        return
      }
      arguments.callee(node.left)
      result.push(node.val)
      arguments.callee(node.right)
    }
  inorder(root)
  return result
}

/*----- solution 2 -----
Iterations.
Using stack to hold treeNodes.
Time complexity is O(n) 
Space complexity is O(n)
*/
var inorderTraversal = function (root) {
  const result = [],
    stack = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      result.push(root.val)
      root = root.right
    }
  }
  return result
}
