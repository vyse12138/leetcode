function minimumDeletions(nums: number[]): number {
  let max = Math.max(...nums)
  let min = Math.min(...nums)

  let i1 = nums.findIndex(e => e === max)
  let i2 = nums.findIndex(e => e === min)
  if (i1 > i2) {
    ;[i1, i2] = [i2, i1]
  }

  let g1 = i1
  let g2 = i2 - i1 - 1
  let g3 = nums.length - i2 - 1
  let maxg = Math.max(g1, g2, g3)
  if (maxg === g1) {
    return 2 + g2 + g3
  }
  if (maxg === g2) {
    return 2 + g1 + g3
  }
  if (maxg === g3) {
    return 2 + g2 + g1
  }
}
