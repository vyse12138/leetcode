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
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++){
      nums.unshift(nums.pop());
    }
};

/*----- solution 2 -----
Get the last k elements in the array and put it to the first.
Issue: when k > 2 * nums.length, it doesnt work
Time complexity is O(n^2)
Space complexity is O(1)
*/
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k, k));
}; 
