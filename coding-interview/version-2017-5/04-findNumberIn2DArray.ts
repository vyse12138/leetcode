// Time complexity: O(mn)
// Space complexity: O(1)
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  for (let row of matrix) {
    if (row.includes(target)) {
      return true
    }
  }
  return false
}

// Time complexity: O(m + n)
// Space complexity: O(1)
function findNumberIn2DArray2(matrix: number[][], target: number): boolean {
  if (!matrix.length || !matrix[0]?.length) {
    return false
  }

  let row = 0
  let column = matrix[0].length - 1

  while (column >= 0 && row < matrix.length) {
    if (matrix[row][column] === target) {
      return true
    }

    if (matrix[row][column] > target) {
      column--
    } else {
      row++
    }
  }

  return false
}
