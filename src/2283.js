/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  let n = nums.length + maxOperations;
  let sum = nums.reduce((a,b)=> a+b);
  let max =  Math.ceil(sum/n);
  while (n--) {
    let i = nums.indexOf(Math.max(...nums));
    nums[i] -= max;
  }
  return (Math.max(...nums));
};