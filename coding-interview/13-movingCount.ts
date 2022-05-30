// Time complexity: O(mn)
// Space complexity: O(mn)
function movingCount(m: number, n: number, k: number): number {
  const getSum = (x: number) => {
    let s = 0
    while (x > 0) {
      s += x % 10
      x = Math.floor(x / 10)
    }
    return s
  }

  let visited = new Array(m).fill(null).map(e => new Array(n).fill(false))

  const dfs = (i: number, j: number, sum: number) => {
    if (i === m || j === n || sum > k || visited[i][j]) {
      return 0
    }
    visited[i][j] = true

    return (
      1 +
      dfs(i + 1, j, getSum(i + 1) + getSum(j)) +
      dfs(i, j + 1, getSum(i) + getSum(j + 1))
    )
  }

  return dfs(0, 0, 0)
}
