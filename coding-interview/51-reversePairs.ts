// Time complexity: O(n log n )
// Space complexity: O(n)
function reversePairs(nums: number[]): number {
  let temp: number[] = []
  const merge = (l: number, r: number) => {
    if (l >= r) {
      return 0
    }

    let m = Math.floor((l + r) / 2)

    let res = merge(l, m) + merge(m + 1, r)

    let i = l,
      j = m + 1

    for (let k = l; k <= r; k++) {
      temp[k] = nums[k]
    }
    for (let k = l; k <= r; k++) {
      if (i === m + 1) {
        nums[k] = temp[j]
        j++
      } else if (j === r + 1 || temp[i] <= temp[j]) {
        nums[k] = temp[i]
        i++
      } else {
        nums[k] = temp[j]
        j++
        res += m - i + 1
      }
    }
    return res
  }

  return merge(0, nums.length - 1)
}
