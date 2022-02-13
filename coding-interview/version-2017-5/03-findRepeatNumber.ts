// Time complexity: O(n)
// Space complexity: O(n)
function findRepeatNumber(nums: number[]): number {
  const set: Set<number> = new Set()

  for (const e of nums) {
    if (set.has(e)) {
      return e
    }
    set.add(e)
  }
}

// Time complexity: O(n log n)
// Space complexity: O(1)
function findRepeatNumber2(nums: number[]): number {
  nums.sort()

  let last: number = -1
  for (let e of nums) {
    if (e === last) {
      return e
    }
    last = e
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
function findRepeatNumber3(nums: number[]): number {
  let i = 0

  while (i < nums.length) {
    if (nums[i] === i) {
      i++
      continue
    }

    if (nums[i] === nums[nums[i]]) {
      return nums[i]
    }

    ;[nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]]
  }
}
