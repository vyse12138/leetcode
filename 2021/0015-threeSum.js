/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*----- solution 1 -----
TLE at test case 315/318
Three pointers.
Time complexity is O(n^3) 
Space complexity is O(n)
*/
var threeSum = function (nums) {
  const result = []
  let p1, p2, p3
  if (nums.length < 3) {
    return result
  }
  for (let i = 0; i < nums.length - 2; i++) {
    p1 = i
    for (let j = 1; j < nums.length - 1; j++) {
      p2 = j
      for (let k = 2; k < nums.length; k++) {
        p3 = k
        if (nums[p1] + nums[p2] + nums[p3] === 0) {
          let temp = [nums[p1], nums[p2], nums[p3]].sort()
          result.push(temp)
        }
      }
    }
  }
  let stringResult = result.map(JSON.stringify)
  let setResult = new Set(stringResult)
  return Array.from(setResult, JSON.parse)
}

/*----- solution 2 -----
Sort + Two pointers.
Time complexity is O(n^2) 
Space complexity is O(1)
*/
var threeSum = function (nums) {
  let result = [],
    length = nums.length
  if (length < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      return result
    }
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1,
      right = length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        result.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) {
          left++
        }
        while (nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return result
}
