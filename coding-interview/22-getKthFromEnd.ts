import { ListNode } from './06-reversePrint'

// Time complexity: O(n)
// Space complexity: O(1)
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let length = 0
  let cur = head
  while (cur) {
    cur = cur.next
    length++
  }
  cur = head
  for (let i = 0; i < length - k; i++) {
    cur = cur?.next
  }
  return cur
}
// Time complexity: O(n)
// Space complexity: O(1)
function getKthFromEnd2(head: ListNode | null, k: number): ListNode | null {
  let fast = head,
    slow = head

  while (k > 0 && fast) {
    fast = fast.next
    k--
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
