/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const dp = new Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length).fill(0))
  dp[0][0] = grid[0][0]

  for (let i = 1; i < grid.length; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0]
  }

  for (let j = 1; j < grid[0].length; j++) {
    dp[0][j] = grid[0][j] + dp[0][j - 1]
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
    }
  }

  return dp[grid.length - 1][grid[0].length - 1]
}
// @lc code=end
