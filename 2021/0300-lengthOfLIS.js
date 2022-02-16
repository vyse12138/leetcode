/**
 * @param {number[]} nums
 * @return {number}
 */

/*----- solution 1 -----
dp, hold an array to store LIS for 0 ~ i
Time complexity is O(n^2)
Space complexity is O(n)
*/
var lengthOfLIS = function (nums) {
  const dp = []
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}
