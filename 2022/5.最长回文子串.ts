/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length <= 1) return s

  let max = 1
  let start = 0

  const dp = new Array(s.length)
    .fill(null)
    .map(() => new Array(s.length).fill(false))
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true
  }

  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      if (dp[i][j] && j - i + 1 > max) {
        max = j - i + 1
        start = i
      }
    }
  }
  return s.substring(start, start + max)
}
// @lc code=end
