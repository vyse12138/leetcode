/**
 * @param {number} n
 * @return {number[][]}
 */

/*----- solution 1 -----
Similar to q54, change the output to a two dimensional array,
iterate in the same way 
Time complexity is O(n^2)
Space complexity is O(1)
*/
var generateMatrix = function (n) {
  let
    left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1,
    result = new Array(n),
    num = 1;
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }
  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      result[top][i] = num++;
    }

    for (let i = top + 1; i <= bottom; i++) {
      result[i][right] = num++;
    }
    for (let i = right - 1; i > left; i--) {
      result[bottom][i] = num++;
    }
    for (let i = bottom; i > top; i--) {
      result[i][left] = num++;
    }
    left++; right--;
    top++;
    bottom--;
  }
  return result;
};