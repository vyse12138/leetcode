/**
 * @param {number} num
 * @return {string}
 */

/*----- solution 1 -----
Greedy algorithm.
Time complexity is O(1) 
Space complexity is O(1)
*/
var intToRoman = function (num) {
  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    chars = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    result = '';
  while (num) {
    if (num >= nums[0]) {
      result += chars[0];
      num -= nums[0];
    } else {
      nums.shift();
      chars.shift();
    }
  }
  return result;
};

