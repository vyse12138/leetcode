/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let res = 0,
    current = 0
  const set = new Set<number>()
  for (const num of nums) set.add(num)

  set.forEach(num => {
    if (set.has(num - 1)) {
      res = Math.max(res, current)
      current = 0
    } else {
      let temp = num
      while (set.has(temp)) {
        current++
        temp++
      }
      res = Math.max(res, current)
      current = 0
    }
  })

  return res
}
// @lc code=end
