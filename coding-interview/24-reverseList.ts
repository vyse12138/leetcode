import { ListNode } from './06-reversePrint'

// Time complexity: O(n)
// Space complexity: O(1)
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
