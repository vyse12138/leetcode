function getAverages(nums: number[], k: number): number[] {
  if (k >= nums.length / 2) {
    return new Array(nums.length).fill(-1)
  }

  let dp: number[] = []
  dp.push(nums.slice(0, 1 + 2 * k).reduce((a, b) => a + b))
  for (let i = 1; i < nums.length - 2 * k; i++) {
    dp[i] = dp[i - 1] - nums[i - 1] + nums[i + 2 * k]
  }

  for (let i = 0; i < k; i++) {
    dp.push(-1)
    dp.unshift(-1)
  }
  return dp.map(e => {
    return e === -1 ? -1 : Math.floor(e / (2 * k + 1))
  })
}
