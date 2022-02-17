/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  if (s.length < 2) return 0

  const dp: number[] = new Array(s.length).fill(0)

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(') {
      continue
    }

    if (i - dp[i - 1] - 1 < 0 || s[i - dp[i - 1] - 1] !== '(') {
      continue
    }

    let temp = 2

    temp += dp[i - 1]

    i - dp[i - 1] - 2 > 0 && (temp += dp[i - dp[i - 1] - 2])

    dp[i] = temp
  }
  return Math.max(...dp)
}
// @lc code=end
