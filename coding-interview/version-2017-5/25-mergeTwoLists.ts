import { ListNode } from './06-reversePrint'

// Time complexity: O(n)
// Space complexity: O(1)
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head: ListNode = new ListNode()

  let cur = head
  while (l1 || l2) {
    if (!l1) {
      cur.next = l2
      l2 = l2.next
    } else if (!l2) {
      cur.next = l1
      l1 = l1.next
    } else if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  return head.next
}

// Time complexity: O(n)
// Space complexity: O(1)
function mergeTwoLists2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head: ListNode = new ListNode(),
    cur = head
  while (l1 && l2) {
    l1.val < l2.val
      ? ([cur.next, l1] = [l1, l1.next])
      : ([cur.next, l2] = [l2, l2.next])
    cur = cur.next
  }
  cur.next = l1 ? l1 : l2 ? l2 : null
  return head.next
}
