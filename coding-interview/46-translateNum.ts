// Time complexity: O(n)
// Space complexity: O(n)
function translateNum(num: number): number {
  const dp = [1, 1]

  let s = num.toString()

  for (let i = 2; i <= s.length; i++) {
    let temp = Number(s.substring(i - 2, i))

    if (temp < 26 && temp > 9) {
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      dp[i] = dp[i - 1]
    }
  }

  return dp.pop()
}
