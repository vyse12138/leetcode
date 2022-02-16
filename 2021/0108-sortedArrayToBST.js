/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

/*----- solution 1 -----
Recursion. 
Time complexity is O(n) 
Space complexity is O(n)
*/
var sortedArrayToBST = function (nums) {
  let dfs = (nums, left, right) => {
    if (left > right) {
      return null
    }
    let mid = Math.floor((left + right) / 2)
    let node = new TreeNode(nums[mid])
    node.left = dfs(nums, left, mid - 1)
    node.right = dfs(nums, mid + 1, right)
    return node
  }
  return dfs(nums, 0, nums.length - 1)
}
