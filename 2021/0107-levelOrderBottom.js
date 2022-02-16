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
var levelOrderBottom = function (root) {
  let result = [],
    queue = []
  if (!root) {
    return []
  }
  queue.push(root)
  while (queue.length) {
    let length = queue.length,
      row = []
    while (length--) {
      let node = queue.pop()
      row.push(node.val)
      node.left && queue.unshift(node.left)
      node.right && queue.unshift(node.right)
    }
    result.unshift(row)
  }
  return result
}
