// Time complexity: O(n)
// Space complexity: O(1)
function singleNumbers(nums: number[]): number[] {
  let res = 0,
    m = 1
  let x = 0,
    y = 0
  for (let num of nums) {
    res ^= num
  }

  while ((res & m) === 0) {
    m <<= 1
  }

  for (let num of nums) {
    if (num & m) {
      x ^= num
    } else {
      y ^= num
    }
  }

  return [x, y]
}
