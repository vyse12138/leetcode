/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if (n <= 1) return n
  let [a, b] = [0, 1]

  for (let i = 1; i < n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}
// @lc code=end
