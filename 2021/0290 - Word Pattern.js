/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

/*----- solution 1 -----
Similar to q205
Two maps. 
The first map key - value : pattern[i] - s[i].
The second map key - value : s[i] - pattern[i].
Go through them to check if key value pair matches.
If not, return false;
Time complexity is O(n^2)
Space complexity is O(n)
*/
var wordPattern = function(pattern, s) {
  s = s.split(' ');
  if (s.length !== pattern.length) {
    return false;
  }
  let map = new Map, map2 = new Map;
  for ( let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) && s[i] !== map.get(pattern[i]) || map2.has(s[i]) && pattern[i] !== map2.get(s[i])) {
      return false;
    }
    else {
      map.set(pattern[i],s[i]);
      map2.set(s[i],pattern[i]);
    }
  }
  return true;
};