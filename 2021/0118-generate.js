/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*----- solution 1 -----
Time complexity is O(n^2)
Space complexity is O(n)
*/
var generate = function (numRows) {
  let result = []
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1)
    if (i > 1) {
      for (j = 1; j < row.length - 1; j++) {
        row[j] = result[i - 1][j - 1] + result[i - 1][j]
      }
    }
    result.push(row)
  }
  return result
}
