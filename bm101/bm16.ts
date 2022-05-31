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
  const rec = (node: ListNode) => {
    if (!node) return node

    if (node.val === node.next?.val) {
      while (node.val === node.next?.val) {
        node = node.next
      }
      return rec(node.next)
    }
    node.next = rec(node.next)
    return node
  }

  return rec(head)
}
