/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const dp: number[][] = new Array(obstacleGrid.length)
    .fill(null)
    .map(() => new Array(obstacleGrid[0].length).fill(0))

  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 1) {
      break
    }
    dp[0][i] = 1
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 1) {
      break
    }
    dp[i][0] = 1
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
}
// @lc code=end

function uniquePathsWithObstacles2(obstacleGrid: number[][]): number {
  const uniquePaths: number[][] = new Array(obstacleGrid.length)
    .fill(null)
    .map(() => new Array(obstacleGrid[0].length).fill(0))

  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 1) {
      break
    }
    uniquePaths[0][i] = 1
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 1) {
      break
    }
    uniquePaths[i][0] = 1
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] !== 1) {
        uniquePaths[i][j] = uniquePaths[i - 1][j] + uniquePaths[i][j - 1]
      }
    }
  }
  return uniquePaths.pop().pop()
}
