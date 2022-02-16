/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/*----- solution 1 -----
Iteration, BFS.
Using queue.
Time complexity is O(n) 
Space complexity is O(n)
*/
var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }
  let result = [],
    queue = [root],
    fromLeft = true
  while (queue.length) {
    let length = queue.length,
      row = []
    while (length--) {
      let node = queue.shift()
      if (fromLeft) {
        row.push(node.val)
      }
      if (!fromLeft) {
        row.unshift(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    fromLeft = !fromLeft
    result.push(row)
  }
  return result
}
