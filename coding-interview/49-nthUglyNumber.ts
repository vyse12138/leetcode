// Time complexity: O(n)
// Space complexity: O(n)
function nthUglyNumber(n: number): number {
  let dp: number[] = [1]
  let p2 = 0,
    p3 = 0,
    p5 = 0

  for (let i = 1; i < n; i++) {
    let x2 = 2 * dp[p2]
    let x3 = 3 * dp[p3]
    let x5 = 5 * dp[p5]

    dp[i] = Math.min(x2, x3, x5)

    if (dp[i] === x2) p2++
    if (dp[i] === x3) p3++
    if (dp[i] === x5) p5++
  }

  return dp.pop()
}
