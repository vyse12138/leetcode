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
 * @param head ListNode类 the head node
 * @return ListNode类
 */
export function sortInList(head: ListNode): ListNode {
  const sortRec = (node: ListNode) => {
    if (!node || !node.next) {
      return node
    }
    let left = node,
      right = node.next

    while (right && right.next) {
      left = left.next
      right = right.next.next
    }

    let temp = left.next
    left.next = null
    let val1 = sortRec(node)
    let val2 = sortRec(temp)

    return Merge(val1, val2)
  }

  return sortRec(head)
}

export function Merge(pHead1: ListNode, pHead2: ListNode): ListNode {
  // write code here
  let head = new ListNode()
  let current = head

  while (pHead1 !== null && pHead2 !== null) {
    if (pHead1.val < pHead2.val) {
      current.next = pHead1
      pHead1 = pHead1.next
    } else {
      current.next = pHead2
      pHead2 = pHead2.next
    }
    current = current.next
  }

  current.next = pHead1 ? pHead1 : pHead2

  return head.next
}
