/**
 * @param {number} x
 * @return {number}
 */

/*----- solution 1 -----
Binary search
Time complexity is O(log(n))
Space complexity is O(1)
*/
var mySqrt = function (x) {
  let left = 0,
    right = x,
    mid,
    result = -1
  while (left <= right) {
    mid = parseInt((left + right) / 2)
    if (mid ** 2 <= x) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return result
}
