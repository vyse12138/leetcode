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
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
export function FindKthToTail(pHead: ListNode, k: number): ListNode {
  let current = pHead
  let length = 0

  while (current) {
    current = current.next
    length++
  }

  if (k > length) {
    return null
  }

  for (let i = 0; i < length - k; i++) {
    pHead = pHead.next
  }

  return pHead
}
