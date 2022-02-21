/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res: number[][] = []

  const temp = []

  const rec = (index: number) => {
    if (index === nums.length) {
      res.push(temp.slice())
      return
    }

    for (const num of nums) {
      if (!temp.includes(num)) {
        temp.push(num)
        rec(index + 1)
        temp.pop()
      }
    }
  }
  rec(0)

  return res
}
// @lc code=end
