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
 * @return {boolean}
 */

/*----- solution 1 -----
Recursion, DFS.
Time complexity is O(n^2) 
Space complexity is O(n)
*/
let maxDepth = root => {
  if (!root) {
    return 0;
  }
  else {
    return (Math.max(maxDepth(root.left), maxDepth(root.right)) + 1);
  }
};
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};