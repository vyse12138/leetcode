/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*----- solution 1 -----
Get the last element in the array and put it to the first,
repeat k times.
Time complexity is O(n^2)
Space complexity is O(1)
*/
var rotate = function (nums, k) {
  k = k % nums.length
  nums.unshift(...nums.splice(nums.length - k, k))
}
