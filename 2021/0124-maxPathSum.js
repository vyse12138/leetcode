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
Recursion, post order DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var maxPathSum = function (root) {
  let result = Number.MIN_SAFE_INTEGER, maxGain = node => {
    if (!node) {
      return 0;
    }
    let leftGain = Math.max(maxGain(node.left), 0),
      rightGain = Math.max(maxGain(node.right), 0);
    result = Math.max(result, leftGain + rightGain + node.val);
    return node.val + Math.max(leftGain, rightGain)
  }
  maxGain(root);
  return result;
};


