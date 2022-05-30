// Time complexity: O(n)
// Space complexity: O(1)
function maxProfit(prices: number[]): number {
  let min = Number.MAX_SAFE_INTEGER
  let profit = 0
  for (let price of prices) {
    min = Math.min(min, price)
    profit = Math.max(profit, price - min)
  }
  return profit
}
