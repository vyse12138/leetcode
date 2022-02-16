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
Iteration, BFS.
Using queue.
Time complexity is O(n) 
Space complexity is O(n)
*/
var rightSideView = function (root) {
  if (!root) {
    return []
  }
  let result = [],
    queue = [root]
  while (queue.length) {
    let length = queue.length,
      right = 0
    while (length--) {
      let node = queue.shift()
      if (length === 0) {
        right = node.val
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    result.push(right)
  }
  return result
}
