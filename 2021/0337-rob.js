/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*----- solution 1 -----
Recursion, postorder DFS.
Time complexity is O(n) 
Space complexity is O(n)
*/
var rob = function (root) {
  let result = 0,
    maxGain = node => {
      if (!node) {
        return [0, 0]
      }
      let leftGain = maxGain(node.left),
        rightGain = maxGain(node.right),
        selectedGain = node.val + leftGain[1] + rightGain[1]
      unselectedGain =
        Math.max(leftGain[0], leftGain[1]) +
        Math.max(rightGain[0], rightGain[1])
      return [selectedGain, unselectedGain]
    }
  maxGain(root)
  let [selectedMax, unselectedMax] = maxGain(root)
  return Math.max(selectedMax, unselectedMax)
}
