// Time complexity: O(n)
// Space complexity: O(n)
function maxSubArray(nums: number[]): number {
  let dp = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] <= 0) {
      dp[i] = nums[i]
    } else {
      dp[i] = nums[i] + dp[i - 1]
    }
  }
  return Math.max(...dp)
}

// Time complexity: O(n)
// Space complexity: O(1)
function maxSubArray2(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] = nums[i] + nums[i - 1]
    }
  }
  return Math.max(...nums)
}
