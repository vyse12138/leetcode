/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const temp: number[] = []
  candidates = candidates.sort((a, b) => a - b)

  const backTracking = (sum: number, index: number) => {
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push(temp.slice())
      return
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue
      }
      temp.push(candidates[i])
      backTracking(sum + candidates[i], i + 1)
      temp.pop()
    }
  }

  backTracking(0, 0)

  return res
}
// @lc code=end
