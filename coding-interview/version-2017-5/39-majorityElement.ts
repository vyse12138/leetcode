// Time complexity: O(n)
// Space complexity: O(n)
function majorityElement(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  let map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let temp = map.get(nums[i])

      map.set(nums[i], temp + 1)
      if (temp + 1 > nums.length / 2) {
        return nums[i]
      }
    } else {
      map.set(nums[i], 1)
    }
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
function majorityElement2(nums: number[]): number {
  let votes = 0,
    x

  for (let num of nums) {
    if (votes === 0) {
      x = num
    }

    if (num === x) {
      votes++
    } else {
      votes--
    }
  }
  return x
}
