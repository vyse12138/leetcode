// 输入：nums = [0,1,2,2,3,0,4,2], val = 2
// 输出：5, nums = [0,1,4,0,3,_,_,_]

function removeElement(nums: number[], val: number): number {
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue
    } else {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}
