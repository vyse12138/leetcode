/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = []
  const temp: number[] = []

  const backTracking = (index: number) => {
    res.push(temp.slice())
    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i])
      backTracking(i + 1)
      temp.pop()
    }
  }
  backTracking(0)

  return res
}
// @lc code=end
