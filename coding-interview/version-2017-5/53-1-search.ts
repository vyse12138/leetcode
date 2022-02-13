// Time complexity: O(n)
// Space complexity: O(1)
function search(nums: number[], target: number): number {
  let res = 0

  for (let e of nums) {
    if (e === target) {
      res++
    }
  }
  return res
}

// Time complexity: O(log n)
// Space complexity: O(1)
function search2(nums: number[], target: number): number {
  let i = 0,
    j = nums.length - 1

  while (i <= j) {
    let mid = Math.floor((i + j) / 2)
    if (nums[mid] <= target) {
      i = mid + 1
    } else j = mid - 1
  }
  let right = i
  if (j >= 0 && nums[j] !== target) {
    return 0
  }
  i = 0
  while (i <= j) {
    let mid = Math.floor((i + j) / 2)
    if (nums[mid] < target) {
      i = mid + 1
    } else j = mid - 1
  }
  let left = j

  return right - left - 1
}
