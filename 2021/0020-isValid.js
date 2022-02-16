/**
 * @param {string} s
 * @return {boolean}
 */

/*----- solution 1 -----
Using stack to store.
Time complexity is O(n)
Space complexity is O(n)
*/
var isValid = function (s) {
  let map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  let stack = []
  s = s.split('')
  while (s.length) {
    let current = s.shift()
    if (map.has(current) && map.get(current) === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(current)
    }
  }
  return !stack.length
}
