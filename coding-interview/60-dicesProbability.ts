// Time complexity: O(n ^ 2)
// Space complexity: O(n)
function dicesProbability(n: number): number[] {
  let dp: number[] = new Array(6).fill(1 / 6)

  for (let i = 2; i <= n; i++) {
    let temp: number[] = new Array(5 * i + 1).fill(0)
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        temp[j + k] += dp[j] / 6
      }
    }
    dp = temp
  }

  return dp
}
