/**
 * @param {string} s
 * @return {string}
 */

/*----- solution 1 -----
Slice in for loop,
Since slice requires O(n) time complexity 
where n = end - start,
the oveall complexity is going to be n^2.
Time complexity is O(n^2)
Space complexity is O(n)
*/
var reverseVowels = function (s) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
    vowelsIndex = []
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsIndex.push(i)
    }
  }
  for (let i = 0; i < vowelsIndex.length / 2; i++) {
    ;[s[vowelsIndex[i]], s[vowelsIndex[vowelsIndex.length - i - 1]]] = [
      s[vowelsIndex[vowelsIndex.length - i - 1]],
      s[vowelsIndex[i]]
    ]
  }
  return s.join('')
}
