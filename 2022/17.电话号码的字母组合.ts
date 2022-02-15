/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits === '') return []

  const map = new Map<string, string>()
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')

  const res = []
  const comb = []

  ;(function rec() {
    if (comb.length === digits.length) {
      res.push(comb.join(''))
      return
    }

    const chars = map.get(digits[comb.length])

    for (const char of chars) {
      comb.push(char)
      rec()
      comb.pop()
    }
  })()

  return res
}
// @lc code=end
