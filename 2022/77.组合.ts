/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res: number[][] = []
  const current: number[] = []
  const backTracking = (index: number) => {
    if (current.length === k) {
      res.push(current.slice())
      return
    }
    for (let i = index; i <= n - k + 1 + current.length; i++) {
      current.push(i)
      backTracking(i + 1)
      current.pop()
    }
  }
  backTracking(1)
  return res
}
// @lc code=end
