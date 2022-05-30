// Time complexity: O(n)
// Space complexity: O(k)
function maxSlidingWindow(nums: number[], k: number): number[] {
  let deque: number[] = [],
    res: number[] = []
  for (let i = 1 - k, j = 0; j < nums.length; i++, j++) {
    if (i > 0 && deque[0] == nums[i - 1]) {
      deque.shift()
    }
    deque = deque.filter(e => e >= nums[j])
    deque.push(nums[j])

    if (i >= 0) {
      res.push(deque[0])
    }
  }
  return res
}
