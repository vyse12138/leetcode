/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let res = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1]
    }
  }
  return res
}
// @lc code=end
