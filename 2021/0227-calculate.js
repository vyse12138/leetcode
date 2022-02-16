/**
 * @param {string} s
 * @return {number}
 */

/*----- solution 1 -----
Stack
Time complexity is O(n) 
Space complexity is O(n)
*/
var calculate = function (s) {
  s += '+'
  let stack = [],
    sign = '+',
    num = 0
  for (char of s) {
    if (char !== ' ') {
      if (!isNaN(char - 0)) {
        num = char - 0 + num * 10
      } else {
        switch (sign) {
          case '+': {
            stack.push(num)
            break
          }
          case '-': {
            stack.push(-num)
            break
          }
          case '*': {
            stack.push(stack.pop() * num)
            break
          }
          case '/': {
            stack.push((stack.pop() / num) | 0)
            break
          }
        }
        sign = char
        num = 0
      }
    }
  }
  return stack.reduce((a, b) => a + b)
}
