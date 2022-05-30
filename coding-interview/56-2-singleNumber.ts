// Time complexity: O(n)
// Space complexity: O(1)
function singleNumber(nums: number[]): number {
  let one = 0,
    two = 0

  for (let num of nums) {
    one = one ^ (num & ~two)
    two = two ^ (num & ~one)
  }
  return one
}
