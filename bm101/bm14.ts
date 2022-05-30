/*class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */

export function oddEvenList(head: ListNode): ListNode {
  if (!head || !head.next) return head

  let evenHead = head.next,
    odd = head,
    even = head.next

  while (even !== null && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }

  odd.next = evenHead

  return head
}
