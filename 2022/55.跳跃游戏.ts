/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let far = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > far) {
      return false
    }

    far = Math.max(far, nums[i] + i)

    if (far >= nums.length - 1) {
      return true
    }
  }
}
// @lc code=end
