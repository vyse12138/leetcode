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
 * @return {TreeNode}
 */

/*----- solution 1 -----
DFS, recursion.
Compare each node, return false if they are not the same,
or one of them doesnt exist,
return true if reaches the end,
other wise, keep going.
Time complexity is O(n) 
Space complexity is O(n)
*/
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  let left = invertTree(root.left), 
  right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};