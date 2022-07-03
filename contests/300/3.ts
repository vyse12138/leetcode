/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  const dp = new Array(delay).fill(1)
  dp[0] = 0

  for (let i = delay; i <= n; i++) {
    let f = dp[i - 1 - forget] ?? 1
    dp[i] = dp[i - 1] + f
  }
  let res = 0
  for (let i = 0; i < 1 + 1; i++) {
    res += dp.pop()
  }

  return res
}
