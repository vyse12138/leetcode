/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (target <= nums[mid]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}

// @lc code=end
