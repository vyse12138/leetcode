// Time complexity: O(n log n )
// Space complexity: O(1)
function minNumber(nums: number[]): string {
  nums.sort((a, b) => {
    let left = Number(a.toString() + b.toString())
    let right = Number(b.toString() + a.toString())
    return left - right
  })

  return nums.join('')
}
