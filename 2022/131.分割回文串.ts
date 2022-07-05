/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start
function partition(s: string): string[][] {
  const res: string[][] = []
  const temp: string[] = []

  const isRe = (word: string) => {
    // return word.split('').join() === word.split('').reverse().join()
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
      if (word[i] !== word[j]) return false
    }
    return true
  }

  const backTracking = (str: string) => {
    if (str.length === 0) {
      res.push(temp.slice())
      return
    }

    for (let i = 1; i <= str.length; i++) {
      if (isRe(str.slice(0, i))) {
        temp.push(str.slice(0, i))
        backTracking(str.slice(i, str.length))
        temp.pop()
      }
    }
  }

  backTracking(s)

  return res
}
// @lc code=end
