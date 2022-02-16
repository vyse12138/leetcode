/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

/*----- solution 1 -----
Convert to array, spilt by '.'
Keep poping the very left element and compare them until one version array is empty,
or they are not the same.
We return the sign of the difference for the latter.
Then we cut of the ending zeros and return the non-empty version as the larger version.
If both empty, return 0 for equal.
Time complexity is O(n^2) 
Space complexity is O(n)
*/
var compareVersion = function (version1, version2) {
  version1 = version1.split('.').map(Number)
  version2 = version2.split('.').map(Number)
  let difference
  while (version1.length && version2.length) {
    difference = Math.sign(version1.shift() - version2.shift())
    if (difference !== 0) {
      return difference
    }
  }
  while (version1[version1.length - 1] === 0) {
    version1.pop()
  }
  while (version2[version2.length - 1] === 0) {
    version2.pop()
  }
  if (version1.length) {
    return 1
  } else if (version2.length) {
    return -1
  } else {
    return 0
  }
}
