// Time complexity: O(n)
// Space complexity: O(1)
function missingNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return nums.length
}

// Time complexity: O(log n)
// Space complexity: O(1)
function missingNumber2(nums: number[]): number {
  let low = 0,
    high = nums.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] === mid) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return low
}
