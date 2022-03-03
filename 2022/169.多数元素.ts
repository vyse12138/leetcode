/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let n = null
  let count = 0

  for (const num of nums) {
    if (n === null) {
      n = num
      count++
    } else {
      if (n === num) {
        count++
      } else {
        if (count > 0) {
          count--
        } else {
          n = num
          count = 1
        }
      }
    }
  }

  return n
}
// @lc code=end
