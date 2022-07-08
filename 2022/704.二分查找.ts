/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      left = mid + 1
    }
    if (target < nums[mid]) {
      right = mid - 1
    }
  }

  return -1
}
// @lc code=end
