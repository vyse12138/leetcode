/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/*----- solution 1 -----
Convert to array, unshift zeros to the array with smaller length so that length matches.
Do binary addition from right to left for two arrays.
Finally, unshift an 1 if carry is 1.
Time complexity is O(n)
Space complexity is O(1)
*/
var addBinary = function (a, b) {
  a = a.split('');
  b = b.split('');
  let result = [], carry = 0, digit = 0;
  length = Math.max(a.length, b.length);
  while (a.length < length) {
    a.unshift('0');
  }
  while (b.length < length) {
    b.unshift('0');
  }
  while (a.length) {
    digit = (a.pop() - 0) + (b.pop() - 0) + carry;
    if (digit > 1) {
      digit -= 2;
      carry = 1;
    }
    else {
      carry = 0;
    }
    result.unshift(digit);
  }
  if (carry === 1) {
    result.unshift('1');
  }
  return result.join('');
};