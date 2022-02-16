/**
 * @param {string} S
 * @return {string}
 */

/*----- solution 1 -----
recursive
Time complexity is O(n^2)
Space complexity is O(n^2)
*/
var removeDuplicates = function (S) {
  let temp = S[0]
  for (let i = 1; i < S.length; i++) {
    if (S[i] === temp) {
      return removeDuplicates(S.slice(0, i - 1).concat(S.slice(i + 1)))
    }
    temp = S[i]
  }
  return S
}

/*----- solution 2 -----
stack
Time complexity is O(n)
Space complexity is O(n)
*/
var removeDuplicates = function (S) {
  const stack = []
  for (const char of S) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}
