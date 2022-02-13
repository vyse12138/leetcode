// Time complexity: O(mn)
// Space complexity: O(1)
function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return []

  let top = 0,
    left = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1
  let res: number[] = []

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }

    for (let j = top + 1; j <= bottom; j++) {
      res.push(matrix[j][right])
    }

    if (top < bottom && left < right) {
      for (let m = right - 1; m >= left; m--) {
        res.push(matrix[bottom][m])
      }

      for (let n = bottom - 1; n > top; n--) {
        res.push(matrix[n][left])
      }
    }
    ;[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }

  return res
}
