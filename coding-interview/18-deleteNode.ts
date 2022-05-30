import { ListNode } from './06-reversePrint'

// Time complexity: O(n)
// Space complexity: O(1)
function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head?.val === val) return head.next

  let cur = head

  while (cur?.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      break
    }
    cur = cur.next
  }

  return head
}
