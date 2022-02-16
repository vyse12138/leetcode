/**
 * @param {number} n
 * @return {string}
 */

/*----- solution 1 -----
Recursion.
End when input is 1, return '1'.
Compute count and say for previous node.
Time complexity is O(n^2)
Space complexity is O(n)
*/
var countAndSay = function (n) {
  if (n === 1) {
    return '1'
  }
  let previous = countAndSay(n - 1),
    result = '',
    count = 1
  for (let i = 0; i < previous.length; i++) {
    if (previous[i] === previous[i + 1]) {
      count++
    } else {
      result += count.toString() + previous[i]
      count = 1
    }
  }
  return result
}
