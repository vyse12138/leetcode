/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*----- solution 1 -----
Two maps. 
The first map key - value : s[i] - t[i].
The second map key - value : t[i] - s[i].
Go through them to check if key value pair matches.
If not, return false;
Time complexity is O(n^2)
Space complexity is O(n)
*/
var isIsomorphic = function(s, t) {
  let map = new Map,map2 = new Map;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (t[i] !== map.get(s[i])) {
        return false;
      }
    }
    else {
      map.set(s[i],t[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map2.has(t[i])) {
      if (s[i] !== map2.get(t[i])) {
        return false;
      }
    }
    else {
      map2.set(t[i],s[i]);
    }
  }
  return true;
};