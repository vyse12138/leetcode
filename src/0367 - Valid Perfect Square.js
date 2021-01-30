/**
 * @param {number} num
 * @return {boolean}
 */

/*----- solution 1 -----
Binary search
Time complexity is O(log(n))
Space complexity is O(1)
*/
var isPerfectSquare = function(num) {
  let left = 0, right = num, mid, result = -1;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (mid ** 2 <= num) {
      result = mid;
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  return result;
};

