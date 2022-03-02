/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let min = nums[0]
  let max = nums[0]
  let res = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let tempMax = max * nums[i]
    let tempMin = min * nums[i]

    max = Math.max(nums[i], tempMax, tempMin)
    min = Math.min(nums[i], tempMax, tempMin)
    res = Math.max(max, res)
  }

  return res
}
// @lc code=end
