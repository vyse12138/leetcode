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
Recursion. DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var isValidBST = function (root) {
  let result = true,
    dfs = (node, lower, upper) => {
      if (node) {
        if (node.val <= lower || node.val >= upper) {
          result = false
        }
        dfs(node.left, lower, node.val)
        dfs(node.right, node.val, upper)
      }
    }
  dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
  return result
}
