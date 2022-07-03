/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 2) return n

  let [a, b] = [1, 2]

  for (let i = 2; i < n; i++) {
    ;[a, b] = [b, a + b]
  }

  return b
}
// @lc code=end
