/*
 * @lc app=leetcode.cn id=969 lang=typescript
 *
 * [969] 煎饼排序
 */

// @lc code=start
function pancakeSort(arr: number[]): number[] {
  const res: number[] = []

  for (let len = arr.length; len > 1; len--) {
    let index = 0
    for (let i = 1; i < len; i++) {
      if (arr[i] > arr[index]) {
        index = i
      }
    }

    if (index === len - 1) {
      continue
    }

    reverse(arr, index)
    reverse(arr, len - 1)

    res.push(index + 1, len)
  }

  return res
}

const reverse = (arr, end) => {
  for (let i = 0, j = end; i < j; i++, j--) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

// @lc code=end
