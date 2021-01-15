/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*----- solution 1 -----

Time complexity is O(n^2)
Space complexity is O(n)
*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  s = s.slice('');
  t = t.slice('');
  let length = s.length
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if(s[i] = t[j]) {
        t.splice(j,1);
      }
    }
  }
  return t.length;
};