/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*----- solution 1 -----
2 flips.
Flip 1 via vertical dividing line,
flip 2 via bottom-left to top-right diagonal.
e.g.[1,2,3],    [3,2,1],    [7,4,1],
    [4,5,6], => [6,5,4], => [8,5,2],
    [7,8,9]     [9,8,7]     [9,6,4]

Time complexity is O(n^2)
Space complexity is O(1)
*/
var rotate = function (matrix) {
  const length = matrix.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length / 2; j++) {
      ;[matrix[i][j], matrix[i][length - j - 1]] = [
        matrix[i][length - j - 1],
        matrix[i][j]
      ]
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      ;[matrix[i][j], matrix[length - 1 - j][length - 1 - i]] = [
        matrix[length - 1 - j][length - 1 - i],
        matrix[i][j]
      ]
    }
  }
  return matrix
}
