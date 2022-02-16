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
var sumNumbers = function (root) {
  let result = 0,
    dfs = (node, sum) => {
      if (node) {
        sum += node.val
        if (!node.left && !node.right) {
          result += sum - 0
        } else {
          dfs(node.left, sum)
          dfs(node.right, sum)
        }
      }
    }
  dfs(root, '')
  return result
}
