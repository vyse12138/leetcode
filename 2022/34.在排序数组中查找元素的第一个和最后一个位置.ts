/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1
  let leftIndex = -1,
    rightIndex = -1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target <= nums[mid]) {
      rightIndex = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target < nums[mid]) {
      leftIndex = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (nums[leftIndex] === target && nums[rightIndex] === target) {
    return [leftIndex, rightIndex]
  }
  return [-1, -1]
}
// @lc code=end
