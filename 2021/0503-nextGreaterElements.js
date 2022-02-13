/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*----- solution 1 -----
Two iterations
Time complexity is O(n^2)
Space complexity is O(1)
*/
var nextGreaterElements = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = i + 1; j < nums.length && !found; j++) {
      if (nums[j] > nums[i]) {
        result.push(nums[j]);
        found = true;
      }
    }
    for (let j = 0; j < i && !found; j++) {
      if (nums[j] > nums[i]) {
        result.push(nums[j]);
        found = true;
      }
    }
    !found && result.push(-1);
  }
  return result;
};

/*----- solution 2 -----
Using stack to hold nums' index
Time complexity is O(n)
Space complexity is O(n)
*/
var nextGreaterElements = function (nums) {
  const result = Array(nums.length).fill(-1),
    stack = [];
  for (let i = 0; i < nums.length * 2 - 1; i++) {
    while (nums[stack[stack.length - 1]] < nums[i % nums.length]) {
      result[stack[stack.length - 1]] = nums[i % nums.length];
      stack.pop();
    }
    stack.push(i % nums.length);
  }
  return result;
};
