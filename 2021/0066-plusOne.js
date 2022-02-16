/**
 * @param {number[]} digits
 * @return {number[]}
 */

/*----- solution 1 -----
Convert to integer, then add one, then convert back to array
However, due to max integer 2^53-1 has only 16 digits,
it can not meet the requirement of input length of 100 digits
Time complexity is O(n)
Space complexity is O(1)
*/
var plusOne = function (digits) {
  let strDigits = (parseInt(digits.join('')) + 1).toString()
  return strDigits.padStart(digits.length - strDigits.length + 1, '0').split('')
}

/*----- solution 2 -----
Time complexity is O(n)
Space complexity is O(1)
*/
var plusOne = function (digits) {
  //iterate the array from right to left
  for (let i = digits.length - 1; i > -1; i--) {
    //add one to the last digit in the digits array
    digits[i]++
    //if there is no carry, return the array
    if (digits[i] !== 10) {
      break
    }
    //if there is a carry, keep iterating
    else {
      digits[i] = 0
      //when a carry exsit at the very left of the array,
      //unshift 1 at the left of the array
      if (i === 0) {
        digits.unshift(1)
      }
    }
  }
  return digits
}
