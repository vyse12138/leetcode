/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j)
    }
  }

  return dp[n]
}
// @lc code=end
