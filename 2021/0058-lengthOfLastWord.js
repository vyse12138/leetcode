/**
 * @param {string} s
 * @return {number}
 */

/*----- solution 1 -----
Convert to array and pop the last element.
Time complexity is O(n^2)
Space complexity is O(1)
*/
var lengthOfLastWord = function (s) {
  return s.trim().split(' ').pop() ? s.trim().split(' ').pop().length : 0
}
