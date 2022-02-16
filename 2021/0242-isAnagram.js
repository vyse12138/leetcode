/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*----- solution 1 -----
Convert t and s to array.
Iterate t for each element in s,
delete occured element.
When t is all cleared, return true.
Time complexity is O(n^3)
Space complexity is O(1)
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  if (s === t) {
    return true
  }
  s = s.split('')
  t = t.split('')
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        t.splice(j, 1)
        if (t.length === 0) {
          return true
        }
        break
      }
    }
  }
  return false
}

/*----- solution 2 -----
Convert to array, sort them.
Then compare if they are identical.
Time complexity is O(n^2)
Space complexity is O(1)
*/
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
}
