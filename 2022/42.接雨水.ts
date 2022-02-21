/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  const left = new Array(height.length).fill(0)
  const right = new Array(height.length).fill(0)

  left[0] = height[0]
  right[height.length - 1] = height[height.length - 1]
  for (let i = 1; i < height.length; i++) {
    left[i] = Math.max(left[i - 1], height[i])
  }
  for (let i = height.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i])
  }

  let res = 0

  for (let i = 0; i < height.length; i++) {
    res += Math.min(left[i], right[i]) - height[i]
  }

  return res
}
// @lc code=end
