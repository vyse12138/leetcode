/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let n = nums.length;
  let o = nums.slice().sort((a, b) => a - b)
  let temp = nums.slice();
  while (n--) {
    let a = temp.pop();

    temp.unshift(a);
    if (temp.toString() == o.toString()) {
      return true;
    }
  }
  return false;
};