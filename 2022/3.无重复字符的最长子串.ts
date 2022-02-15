/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let map = new Map<string, number>()

  let max = 0,
    temp = 0
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    let left = -1
    if (map.has(char)) {
      left = map.get(char)
    }
    map.set(char, i)

    if (i - left > temp) {
      temp++
    } else {
      temp = i - left
    }
    max = Math.max(max, temp)
  }
  return max
}
// @lc code=end
