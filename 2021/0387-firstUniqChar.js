/**
 * @param {string} s
 * @return {number}
 */

/*----- solution 1 -----
Set up a map where key is the char, value is the number of occurrence.
Iterate the string, find char with occurrence of 1. 
Time complexity is O(n^2)
Space complexity is O(n)
*/
var firstUniqChar = function (s) {
  let charMap = new Map()
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      charMap.set(s[i], charMap.get(s[i]) + 1)
    } else {
      charMap.set(s[i], 1)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (charMap.get(s[i]) === 1) {
      return i
    }
  }
  return -1
}
