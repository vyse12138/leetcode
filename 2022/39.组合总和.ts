/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []

  const rec = (sum: number, temp: number[], index: number) => {
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push(temp)
      return
    }

    for (let i = index; i < candidates.length; i++) {
      const candidate = candidates[i]
      rec(sum + candidate, [...temp, candidate], i)
    }
  }

  rec(0, [], 0)

  return res
}
// @lc code=end
