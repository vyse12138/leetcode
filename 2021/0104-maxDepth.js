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
 * @return {number}
 */

/*----- solution 1 -----
Recursion, DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var maxDepth = function(root) {
  let depth = 0, dfs = (root, currentDepth) => {
    if (root) {
      currentDepth++;
      if (!root.left && !root.right) {
        depth = Math.max(depth, currentDepth);
      }
      else {
        dfs(root.left, currentDepth);
        dfs(root,right,currentDepth);
      }
    }
  }
  dfs(root, 0);
  return depth;
};

/*----- solution 2 -----
Recursion, DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};