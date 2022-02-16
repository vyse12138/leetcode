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
 * @param {number} targetSum
 * @return {boolean}
 */

/*----- solution 1 -----
Recursion, DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var hasPathSum = function (root, targetSum) {
  let result = false,
    dfs = (node, sum) => {
      if (node) {
        sum += node.val
        if (!node.left && !node.right) {
          if (targetSum === sum) {
            result = true
          }
        } else {
          dfs(node.left, sum)
          dfs(node.right, sum)
        }
      }
    }
  dfs(root, 0)
  return result
}

/*----- solution 2 -----
Recursion, DFS.
Shorter version
Time complexity is O(n) 
Space complexity is O(n)
*/
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    return targetSum === root.val
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}
