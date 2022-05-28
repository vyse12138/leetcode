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
 * @return bool布尔型
 */
export function hasCycle(head: ListNode): boolean {
  let slow = head,
    fast = head

  while (1) {
    slow = slow?.next
    fast = fast?.next?.next

    if (!slow || !fast) {
      return false
    }
    if (slow.val === fast.val) {
      return true
    }
  }
}
