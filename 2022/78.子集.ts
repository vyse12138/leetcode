/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = []
  const temp: number[] = []

  const rec = (index: number) => {
    if (index === nums.length) {
      res.push(temp.slice())
      return
    }

    temp.push(nums[index])
    rec(index + 1)
    temp.pop()

    rec(index + 1)
  }

  rec(0)

  return res
}
// @lc code=end
