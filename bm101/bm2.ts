class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param head ListNode类
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
export function reverseBetween(head: ListNode, m: number, n: number): ListNode {
  if (m === n) return head

  let mPrev: ListNode | null = null
  let current = head

  for (let i = 1; i < m; i++) {
    mPrev = current
    current = current.next
  }

  for (let i = m; i < n; i++) {
    current = current.next
  }

  let nNext = current.next
  let previous = nNext

  current = mPrev?.next ?? head

  for (let i = m; i < n; i++) {
    let next = current.next
    current.next = previous
    previous = current
    current = next
  }

  current.next = previous

  if (mPrev) {
    mPrev.next = current
    return head
  } else {
    return current
  }
}
