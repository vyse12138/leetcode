/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let min = prices[0]

  const dp: number[] = new Array(prices.length).fill(0)

  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i]
    } else if (min < prices[i]) {
      dp[i] = prices[i] - min
    }
  }

  return Math.max(...dp)
}
// @lc code=end
