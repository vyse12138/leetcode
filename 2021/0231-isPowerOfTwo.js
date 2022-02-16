/**
 * @param {number} n
 * @return {boolean}
 */

/*----- solution 1 -----
bit operations.
Left shift for multiply by 2.
Check if at any stage, input is the same as temp.

Time complexity is O(1) 
Space complexity is O(1)
*/
var isPowerOfTwo = function (n) {
  let temp = 1
  for (i = 0; i < 31; i++) {
    if (temp === n) {
      return true
    }
    temp <<= 1
  }
  return false
}

/*----- solution 2 -----
When n is a power of two, in binary, it follows:
n is leading with 1, following by zeros.
e.g. 100 => 8; 10000 => 32.
n - 1 is leading with 0, following by ones.
e.g. 011 => 7 = 8 - 1; 01111 => 31 = 32 - 1.
So, bit operation and n with n - 1 gives true.
e.g. 10000 & 01111 = 1 = true;
Time complexity is O(1) 
Space complexity is O(1)
*/
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) == 0
}
