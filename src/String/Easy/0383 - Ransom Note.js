/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

/*----- solution 1 -----
Two iterations.
In the first, set up a map where key is the letter, 
value is the number of occurrence in magazine.
In the second, build ransomNote up with letter in the map,
while the letter required is not in the amgazine,
return false.
Time complexity is O(n^2)
Space complexity is O(n)
*/
var canConstruct = function(ransomNote, magazine) {
  let map = new Map;
  for (let i = 0; i < magazine.length; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i],map.get(magazine[i]) + 1);
    }
    else {
      map.set(magazine[i],1);
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!map.has(ransomNote[i])) {
      return false;
    }
    map.set(ransomNote[i],map.get(ransomNote[i]) - 1);
    if (map.get(ransomNote[i]) === 0){
      map.delete(ransomNote[i]);
    }
  }
  return true;
};