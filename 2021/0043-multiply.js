/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/*----- solution 1 -----
mutiply each digit on two nums.
Put them in array and convert back to string
Time complexity is O(nm)
Space complexity is O(n+m)
*/
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  num1 = num1.split('')
  num2 = num2.split('')
  let temp,
    result = new Array(num1.length + num2.length).fill(0),
    pos1 = 1,
    pos2 = 1
  for (let i = num2.length - 1; i >= 0; i--) {
    for (let j = num1.length - 1; j >= 0; j--) {
      temp = num1[j] * num2[i]
      result[i + j + 1] += temp
    }
  }
  for (let i = result.length - 1; i >= 0; i--) {
    result[i - 1] += Math.floor(result[i] / 10)
    result[i] %= 10
  }
  while (result[0] === 0) {
    result.shift()
  }
  return result.join('')
}
