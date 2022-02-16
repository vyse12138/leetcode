/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

/*----- solution 1 -----
BFS. Queue.
Time complexity is O(n) 
Space complexity is O(n)
*/
var connect = function (root) {
  if (!root) {
    return null
  }
  let queue = [root]
  while (queue.length) {
    let length = queue.length
    while (length--) {
      let node = queue.shift()
      if (length !== 0) {
        node.next = queue[0]
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
}
