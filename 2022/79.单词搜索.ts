/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  const height = board.length,
    width = board[0].length,
    directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
  const visited = new Array(height)
    .fill(null)
    .map(() => new Array(width).fill(false))

  const check = (i: number, j: number, index: number) => {
    if (board[i][j] !== word[index]) {
      return false
    }

    if (index == word.length - 1) {
      return true
    }

    let result = false
    visited[i][j] = true

    for (const [x, y] of directions) {
      let di = i + x,
        dj = j + y
      if (di >= 0 && di < height && dj >= 0 && dj < width) {
        if (!visited[di][dj]) {
          if (check(di, dj, index + 1)) {
            result = true
            break
          }
        }
      }
    }

    visited[i][j] = false
    return result
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (check(i, j, 0)) {
        return true
      }
    }
  }
  return false
}
// @lc code=end
