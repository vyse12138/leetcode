/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/*----- solution 1 -----
Slice in for loop,
Since slice requires O(n) time complexity 
where n = end - start,
the oveall complexity is going to be n^2.
Time complexity is O(n^2)
Space complexity is O(1)
*/
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }
  let hLength = haystack.length, nLength = needle.length;
  for (i = 0; i < hLength - nLength + 1; i++) {
    if (haystack.slice(i,i + nLength) === needle) {
      return i;
    }
  }
  return -1;
};