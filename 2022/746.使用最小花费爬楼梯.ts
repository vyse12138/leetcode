/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const minCosts: number[] = [0, 0]

  for (let i = 2; i < cost.length + 1; i++) {
    minCosts[i] = Math.min(
      minCosts[i - 1] + cost[i - 1],
      minCosts[i - 2] + cost[i - 2]
    )
  }

  return minCosts.pop()
}
// @lc code=end
