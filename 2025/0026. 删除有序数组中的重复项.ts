// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]

// @ts-ignore
function removeDuplicates(nums: number[]): number {
  let k = 1
  let lastItem = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === lastItem) {
      continue
    } else {
      nums[k] = nums[i]
      lastItem = nums[k]
      k++
    }
  }

  return k
}
