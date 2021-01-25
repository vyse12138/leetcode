/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

/*----- solution 1 -----
TLE 
Time complexity is O(n)
Space complexity is O(1)
*/
var divide = function(dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  let sign = -1, result = 0;
  if (Math.sign(dividend) === Math.sign(divisor)) {
    sign = 1;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (dividend >= divisor) {
    dividend -= divisor;
    result++;
  }
  result *= sign;
  if (result > (2**31 - 1)) {
    result = 2**31 - 1;
  }
  if (result < -(2**31)) {
    result = -(2**31);
  }
  return result;
};




