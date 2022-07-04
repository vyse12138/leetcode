/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = []
  const current: number[] = []

  const backTracking = (index: number, sum: number) => {
    if (sum > n || current.length > k) {
      return
    }
    if (sum === n && current.length === k) {
      res.push(current.slice())
      return
    }
    for (let i = index; i <= Math.min(n, 9); i++) {
      current.push(i)
      backTracking(i + 1, sum + i)
      current.pop()
    }
  }

  backTracking(1, 0)
  return res
}
// @lc code=end
