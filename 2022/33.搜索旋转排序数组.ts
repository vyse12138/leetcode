/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }

  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (target === nums[mid]) {
      return mid
    }

    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[nums.length - 1]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}
// @lc code=end
