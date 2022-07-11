/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let res = 0

  while (s.length !== 0 && g.length !== 0) {
    let maxG = g.pop()
    let maxS = s.pop()

    while (maxG > maxS) {
      if (g.length === 0) {
        return res
      }
      maxG = g.pop()
    }
    res++
  }
  return res
}
// @lc code=end
