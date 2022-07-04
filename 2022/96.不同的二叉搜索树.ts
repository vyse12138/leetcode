/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
function numTrees(n: number): number {
  // n 为根节点时, 一共有有几种组合
  const dp = [1, 1]

  for (let i = 2; i <= n; i++) {
    let sum = 0
    for (let j = 0; j < i; j++) {
      sum += dp[j] * dp[i - j - 1]
    }
    dp[i] = sum
  }

  return dp[n]
}
// @lc code=end
