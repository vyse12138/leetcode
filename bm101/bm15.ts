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
 * @param head ListNode类
 * @return ListNode类
 */
export function deleteDuplicates(head: ListNode): ListNode {
  let current = head
  while (current?.next) {
    while (current?.next && current.val === current.next.val) {
      current.next = current.next.next
    }
    current = current.next
  }

  return head
}
