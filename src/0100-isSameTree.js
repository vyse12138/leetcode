/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
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
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }
  else if (!p || !q || p.val !== q.val) {
    return false;
  }
    return isSameTree(p.left,q.left) && isSameTree(p.right, q.right);
};