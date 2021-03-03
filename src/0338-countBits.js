/**
 * @param {number} num
 * @return {number[]}
 */

/*----- solution 1 -----
Time complexity is O(n^2)
Space complexity is O(1)
*/
var countBits = function (num) {
  const bits = new Array(num + 1).fill(0),
    countOnes = (x) => {
      let ones = 0;
      while (x > 0) {
        (x & 1) && ones++;
        x >>= 1;
      }
      return ones;
    };
  for (let i = 0; i < num + 1; i++) {
    bits[i] = countOnes(i);
  }
  return bits;
};

/*----- solution 2 -----
Time complexity is O(n)
Space complexity is O(1)
*/
var countBits = function (num) {
  const bits = new Array(num + 1).fill(0);
  let high = 0;
  for (let i = 0; i < num + 1; i++) {
    if((i & (i-1)) === 0 ) {
      high = i;
    }
    bits[i] = bits[i - highBit] +1;
  }
  return bits;
};