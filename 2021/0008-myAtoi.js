/**
 * @param {string} s
 * @return {number}
 */

/*----- solution 1 -----
Using parseInt API
Time complexity is O(n)
Space complexity is O(1)
*/
var myAtoi = function (s) {
  s = parseInt(s)
  if (isNaN(s)) {
    return 0
  }
  if (s > 2 ** 31 - 1) {
    return 2 ** 31 - 1
  }
  if (s < -(2 ** 31)) {
    return -(2 ** 31)
  }
  return s
}
