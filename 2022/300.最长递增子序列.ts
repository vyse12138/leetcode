/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
// function lengthOfLIS(nums: number[]): number {
//   const dp: number[] = new Array(nums.length).fill(1)

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }

//   return Math.max(...dp)
// }

function lengthOfLIS(nums: number[]): number {
  let dp: number[] = [Infinity]

  for (let i = 0; i < nums.length; i++) {
    let [left, right] = [0, dp.length]

    while (left < right) {
      let mid = (left + right) >> 1
      if (dp[mid] === nums[i]) {
        right = mid
        break
      } else if (dp[mid] < nums[i]) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    dp[right] = nums[i]
  }

  return dp.length
}

// @lc code=end
