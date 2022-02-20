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

function mergeNodes(head: ListNode | null): ListNode | null {
  const res = new ListNode()
  let cur = res
  head = head.next

  let temp = 0

  while (head !== null) {
    if (head.val === 0) {
      cur.next = new ListNode(temp)
      cur = cur.next
      temp = 0
    } else {
      temp += head.val
    }

    head = head.next
  }
  return res.next
}
