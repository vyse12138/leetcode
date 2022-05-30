// Time complexity: O(n)
// Space complexity: O(n)
function exchange(nums: number[]): number[] {
  let res: number[] = []

  while (nums.length) {
    let temp = nums.pop()

    if (temp % 2) {
      res.unshift(temp)
    } else {
      res.push(temp)
    }
  }

  return res
}

// Time complexity: O(n)
// Space complexity: O(n)
function exchange2(nums: number[]): number[] {
  let odd: number[] = []
  let even: number[] = []

  while (nums.length) {
    let temp = nums.pop()
    if (temp % 2) {
      odd.push(temp)
    } else {
      even.push(temp)
    }
  }
  return odd.concat(even)
}

// Time complexity: O(n)
// Space complexity: O(1)
function exchange3(nums: number[]): number[] {
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    if (nums[r] % 2 && !(nums[l] % 2)) {
      ;[nums[l], nums[r]] = [nums[r], nums[l]]
      l++
      r--
    } else if (nums[l] % 2) {
      l++
    } else if (!(nums[r] % 2)) {
      r--
    } else {
      l++
      r--
    }
  }

  return nums
}

// Time complexity: O(n)
// Space complexity: O(1)
function exchange4(nums: number[]): number[] {
  let l = 0,
    r = nums.length - 1

  while (l < r) {
    while (l < r && (nums[l] & 1) === 1) {
      l++
    }
    while (l < r && (nums[r] & 1) === 0) {
      r--
    }
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
  }

  return nums
}
