/**
 * @param {number} n
 * @return {string}
 */

/*----- solution 1 -----
Convert from base-10 to base-26
Keep dividing n by 26 until n is not greater than 0, 
The remainder queue is the result.
Time complexity is O(n^2)
Space complexity is O(n)
*/
var convertToTitle = function (n) {
  let letters = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ],
    result = []
  while (n > 0) {
    n -= 1
    result.unshift(letters[n % 26])
    n = Math.floor(n / 26)
  }
  return result.join('')
}
