/**
 * @param {number[]} nums
 * @return {number}
 */

/*----- solution 1 -----
set a variable to store the starting index of consecutive one,
iterate the array and move the starting index when 0 is encountered,
compare and store the max length of consecutive one.
Time complexity is O(n)
Space complexity is O(1)
*/
var findMaxConsecutiveOnes = function (nums) {
  let start = 0,
    result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      start = i + 1
    }
    result = Math.max(result, i - start + 1)
  }
  return result
}
