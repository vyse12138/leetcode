/**
 * @param {string} s
 * @return {string}
 */

/*----- solution 1 -----
Using APIs.
Time complexity is O(n)
Space complexity is O(n)
*/
var reverseWords = function (s) {
  return s.trim().split(/\s+/g).reverse().join(' ')
}
