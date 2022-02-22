/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const res: number[][] = []
  for (const interval of intervals) {
    if (res.length === 0) {
      res.push(interval)
      continue
    }

    if (interval[0] <= res[res.length - 1][1]) {
      const temp = [
        res[res.length - 1][0],
        Math.max(interval[1], res[res.length - 1][1])
      ]
      res.pop()
      res.push(temp)
    } else {
      res.push(interval)
    }
  }
  return res
}
// @lc code=end
