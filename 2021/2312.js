/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  let sum = nums.reduce((a, b) => a + b);
  let diff = Math.abs(goal - sum);
  return Math.ceil(diff/limit);

};
