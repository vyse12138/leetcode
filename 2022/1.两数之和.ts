/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [i, map.get(nums[i])]
    } else {
      map.set(target - nums[i], i)
    }
  }
}
// @lc code=end
