/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*----- solution 1 -----
Cheating with Array.reverse() -.-!!
Time complexity is O(n)
Space complexity is O(1)
*/
var reverseString = function (s) {
  return s.reverse()
}

/*----- solution 2 -----
implement Array.reverse()
Time complexity is O(n)
Space complexity is O(1)
*/
var reverseString = function (s) {
  let temp
  for (let i = 0; i < s.length / 2; i++) {
    temp = s[i]
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
  return s
}

/*----- solution 3 -----
Better looking
Time complexity is O(n)
Space complexity is O(1)
*/
var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    ;[s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
  }
  return s
}
