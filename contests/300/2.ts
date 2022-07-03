/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function spiralMatrix(m, n, head) {
  const result = new Array(m).fill(null).map(() => new Array(n).fill(-1))

  let left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1

  let flag = false
  while (!flag) {
    for (let i = left; i <= right; i++) {
      if (flag) break
      result[top][i] = head.val
      head = head.next
      if (!head) flag = true
    }

    for (let i = top + 1; i <= bottom; i++) {
      if (flag) break

      result[i][right] = head.val
      head = head.next
      if (!head) flag = true
    }

    for (let i = right - 1; i > left; i--) {
      if (flag) break

      result[bottom][i] = head.val
      head = head.next
      if (!head) flag = true
    }

    for (let i = bottom; i > top; i--) {
      if (flag) break

      result[i][left] = head.val
      head = head.next
      if (!head) flag = true
    }
    left++
    right--
    top++
    bottom--
  }

  return result
}
