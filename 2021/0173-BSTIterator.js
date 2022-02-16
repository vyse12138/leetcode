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
 */

/*----- solution 1 -----
Recursion. Using array to store inorder dfs values.
Time complexity is O(n) 
Space complexity is O(n)
*/
var BSTIterator = function (root) {
  this.array = []
  let dfs = node => {
    if (!node) {
      return
    }
    dfs(node.left)
    this.array.push(node.val)
    dfs(node.right)
  }
  dfs(root)
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.array.shift()
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.array.length
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
