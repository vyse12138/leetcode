/*
 * @lc app=leetcode.cn id=688 lang=typescript
 *
 * [688] 骑士在棋盘上的概率
 */

// @lc code=start
function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number
): number {
  const dp = new Array(k + 1)
    .fill(null)
    .map(() => new Array(n).fill(null).map(() => new Array(n).fill(0)))

  const moves = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [1, -2],
    [2, -1]
  ]

  for (let step = 0; step <= k; step++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (step === 0) {
          dp[step][i][j] = 1
        } else {
          for (const move of moves) {
            const x = move[0]
            const y = move[1]

            if (x + i < n && x + i >= 0 && y + j < n && y + j >= 0) {
              dp[step][i][j] += dp[step - 1][x + i][y + j] / 8
            }
          }
        }
      }
    }
  }

  return dp[k][row][column]
}
// @lc code=end
