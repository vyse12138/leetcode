// Time complexity: O(n ^ 2)
// Space complexity: O(n)
function lengthOfLongestSubstring(s: string): number {
  if (s === '') return 0
  const dp: number[] = [1]

  for (let i = 1; i < s.length; i++) {
    let char = s[i]
    let left = s.lastIndexOf(char, i - 1)

    if (i - left <= dp[i - 1]) {
      dp[i] = i - left
    } else {
      dp[i] = dp[i - 1] + 1
    }
  }
  return Math.max(...dp)
}

// Time complexity: O(n ^ 2)
// Space complexity: O(1)
function lengthOfLongestSubstring2(s: string): number {
  if (s === '') return 0
  let max = 1,
    temp = 1
  for (let i = 1; i < s.length; i++) {
    let char = s[i]
    let left = s.lastIndexOf(char, i - 1)
    if (i - left <= temp) {
      temp = i - left
    } else {
      temp++
    }
    max = Math.max(max, temp)
  }
  return max
}

// Time complexity: O(n)
// Space complexity: O(1)
function lengthOfLongestSubstring3(s: string): number {
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

    if (i - left <= temp) {
      temp = i - left
    } else {
      temp++
    }
    max = Math.max(max, temp)
  }
  return max
}
