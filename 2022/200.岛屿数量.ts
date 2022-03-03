/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  const dfs = (i: number, j: number) => {
    if (grid[i][j] === '0') {
      return
    }

    grid[i][j] = '0'

    i > 0 && dfs(i - 1, j)
    j > 0 && dfs(i, j - 1)
    i < grid.length - 1 && dfs(i + 1, j)
    j < grid[0].length - 1 && dfs(i, j + 1)
  }

  let id = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        id++
        dfs(i, j)
      }
    }
  }

  return id
}

// @lc code=end
