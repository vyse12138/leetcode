function coutPairs(nums: number[], k: number): number {
  let res = 0
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] * nums[j]) / k === Math.floor((nums[i] * nums[j]) / k)) {
        res++
      }
    }
  }
  return res
}
