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
var minDepth = function (root) {
  let result = Number.MAX_SAFE_INTEGER, dfs = (node, depth) => {
    if (node) {
      depth++;
      if (!node.left && !node.right) {
        result = Math.max(result, depth);
      }
      else {
        dfs(node.left, depth);
        dfs(node.right, depth);
      }
    }
  }
  dfs(node, 0);
  return result;
};

/*----- solution 1 -----
Recursion, DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var minDepth = function (root) {
  let depth = Number.MAX_SAFE_INTEGER;
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  if (root.left) {
    depth = Math.min(depth, minDepth(root.left));
  }
  if (root.right) {
    depth = Math.min(depth, minDepth(root.right));
  }
  return depth + 1;
};