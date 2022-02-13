// Time complexity: O(mn)
// Space complexity: O(1)
function maxValue(grid: number[][]): number {
  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] += grid[0][i - 1]
  }
  for (let i = 1; i < grid.length; i++) {
    grid[i][0] += grid[i - 1][0]
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      let left = grid[i][j - 1]
      let top = grid[i - 1][j]
      let max = Math.max(top, left)

      grid[i][j] += max
    }
  }

  return grid[grid.length - 1][grid[0].length - 1]
}
