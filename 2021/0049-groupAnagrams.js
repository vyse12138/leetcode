/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*----- solution 1 -----
New hashmap, key is the sorted string,
value is the list of strings that matches the sorted string.
Iterate the strs array, put string into map.
If key matches, put into it,
otherwise, create a new key-value pair.
Return values in hashmap.
Time complexity is O(nmlog(m)) where m is the max length of string in strs
Space complexity is O(mn)
*/
var groupAnagrams = function (strs) {
  let map = new Map()
  for (let str of strs) {
    let key = str.split('').sort().join('')
    let list = map.get(key) ? map.get(key) : new Array()
    list.push(str)
    map.set(key, list)
  }
  return Array.from(map.values())
}
