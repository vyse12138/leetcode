// Time complexity: O(n)
// Space complexity: O(1)
function twoSum(nums: number[], target: number): number[] {
  let low = 0,
    high = nums.length - 1
  while (low < high) {
    if (nums[low] + nums[high] < target) {
      low++
    } else if (nums[low] + nums[high] > target) {
      high--
    } else {
      return [nums[low], nums[high]]
    }
  }
}
