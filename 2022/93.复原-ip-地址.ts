/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const res: string[] = []

  const isValidNum = (str: string) => {
    if (str.length === 0 || str.length > 3) {
      return false
    }
    if (str[0] === '0' && str.length > 1) {
      return false
    }
    if (parseInt(str) > 255) {
      return false
    }
    return true
  }

  const backTracking = (index: number, dots: number, str: string) => {
    if (dots > 4) {
      return
    }
    if (dots === 4 && index === s.length) {
      res.push(str.slice(0, -1))
      return
    }

    for (let i = index; i < s.length; i++) {
      if (i - index === 3) {
        break
      }
      if (isValidNum(s.slice(index, i + 1))) {
        backTracking(i + 1, dots + 1, str + s.slice(index, i + 1) + '.')
      }
    }
  }
  backTracking(0, 0, '')

  return res
}
// @lc code=end
