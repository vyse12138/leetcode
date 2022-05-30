// Time complexity: O(n)
// Space complexity: O(n)
function isStraight(nums: number[]): boolean {
  let set = new Set<number>()
  let min = 14,
    max = 0
  for (let n of nums) {
    if (set.has(n)) {
      return false
    }
    if (n !== 0) {
      set.add(n)
      min = Math.min(min, n)
      max = Math.max(max, n)
    }
  }
  return max - min <= 4
}
