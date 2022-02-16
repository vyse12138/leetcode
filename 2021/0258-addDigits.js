/**
 * @param {number} num
 * @return {number}
 */

/*----- solution 1 -----
Iterations
Time complexity is O(n^2)
Space complexity is O(n)
*/
var addDigits = function (num) {
  let numArray = num.toString().split(''),
    result = numArray[0]
  while (numArray.length !== 1) {
    result = 0
    for (n of numArray) {
      result += n - 0
    }
    numArray = result.toString().split('')
  }
  return result
}

/*----- solution 1 -----
Math
Time complexity is O(1)
Space complexity is O(1)
*/
var addDigits = function (num) {
  return ((num - 1) % 9) + 1
}
