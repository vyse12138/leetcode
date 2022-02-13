function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b)

  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push(i)
    }
  }
  return res
}
