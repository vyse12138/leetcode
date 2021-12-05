class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head.next === null) return null
  let slow = head,
    fast = head
  let slowP = null

  while (fast && fast.next) {
    slowP = slow
    slow = slow.next
    fast = fast.next.next
  }
  slowP.next = slow.next

  return head
}
