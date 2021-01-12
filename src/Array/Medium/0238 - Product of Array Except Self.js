/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*----- solution 1 -----
using division, 
cannot resolve when imput elements contains zero.
Time complexity is O(n)
Space complexity is O(1)
*/
var productExceptSelf = function (nums) {
  let result = [],
    length = nums.length,
    product = 1;
  for (let i = 0; i < length; i++) {
    product *= nums[i];
  }

  for (let i = 0; i < length; i++) {
    result[i] = product / nums[i];
  }
  return result;
};

/*----- solution 2 -----
exceed size
Time complexity is O(n^2)
Space complexity is O(1)
*/
var productExceptSelf = function (nums) {
  let result = [],
    length = nums.length;
  for (let i = 0; i < length; i++) {
    temp = 1;
    result[i] = nums.slice(0, i).concat(nums.slice(i + 1, length));
    for (let j = 0; j < result[i].length; j++) {
      temp *= result[i][j];
    }
    result[i] = temp;
  }
  return result;
};

/*----- solution 3 -----
Time complexity is O(n)
Space complexity is O(1)
*/
var productExceptSelf = function (nums) {
  let
    length = nums.length,
    output = [],
    r = 1;
  output[0] = 1;

  for (let i = 1; i < length; i++) {
    output[i] = output[i-1] * nums[i-1];
  }
  for (let i = length-2; i >= 0; i--) {
    r *= nums[i+1];
    output[i] *= r;
  }
  return output;
};

/*----- solution 4 -----
Time complexity is O(n)
Space complexity is O(1)
*/
var productExceptSelf = function (nums) {
  let
    length = nums.length,
    output = new Array(length).fill(1),
    l = 1,
    r = 1;
  for (let i = 1; i < length; i++) {
    l *= nums[i-1];
    r *= nums[length-i];
    output[i] *= l;
    output[length-i-1] *= r;
  }
  return output;
};