/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let left = 0,
    right = nums.length - 1

  for (let i = 0; i <= right; i++) {
    while (nums[i] === 2 && i <= right) {
      ;[nums[i], nums[right]] = [nums[right], nums[i]]
      right--
    }

    if (nums[i] === 0) {
      ;[nums[i], nums[left]] = [nums[left], nums[i]]
      left++
    }
  }
}
// @lc code=end
