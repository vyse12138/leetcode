/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */


/*----- solution 1 -----

Time complexity is O(log(n))
Space complexity is O(1)
*/
var myPow = function (x, n) {
  if (x === 0) {
    return 0;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let result = 1;
  while (n) {
    if (n%2 === 1) {
      result *= x;
    }
    x *= x;
    n = parseInt(n/2);
  }
  return result;
};
/*----- solution 2 -----
Modify solution 1 with Bitwise operations
Time complexity is O(log(n))
Space complexity is O(1)
*/
var myPow = function (x, n) {
  if (x === 0) {
    return 0;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let result = 1;
  while (n) {
    if (n & 1) {
      result *= x;
    }
    x *= x;
    n >>>= 1;
  }
  return result;
};