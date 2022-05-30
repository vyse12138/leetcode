// Time complexity: O(n)
// Space complexity: O(1)
function findContinuousSequence(target: number): number[][] {
  let l = 1,
    r = 1
  let sum = 0
  let res: number[][] = []
  while (l < target / 2) {
    if (sum < target) {
      sum += r
      r++
    } else if (sum > target) {
      sum -= l
      l++
    } else {
      let temp: number[] = []
      for (let i = l; i < r; i++) {
        temp.push(i)
      }
      res.push(temp)
      sum -= l
      l++
    }
  }

  return res
}
