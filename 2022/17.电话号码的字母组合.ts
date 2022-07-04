/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []

  const map = new Map<string, string>()
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')

  const res: string[] = []
  let temp: string = ''

  const backTracking = (index: number) => {
    if (temp.length === digits.length) {
      res.push(temp)
      return
    }

    let letters = map.get(digits[index])
    for (const char of letters) {
      temp += char
      backTracking(index + 1)
      temp = temp.slice(0, -1)
    }
  }
  backTracking(0)
  return res
}
// @lc code=end
