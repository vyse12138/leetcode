/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const temp: number[] = []
  const backTracking = (sum: number, index: number) => {
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push(temp.slice())
      return
    }
    for (let i = index; i < candidates.length; i++) {
      temp.push(candidates[i])
      backTracking(sum + candidates[i], i)
      temp.pop()
    }
  }

  backTracking(0, 0)

  return res
}
// @lc code=end
