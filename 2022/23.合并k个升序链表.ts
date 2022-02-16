/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
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

function mergeTwo(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head = new ListNode()
  let current = head

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }
  list1 && (current.next = list1)
  list2 && (current.next = list2)
  return head.next
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  while (lists.length > 1) {
    const temp = []
    if (lists.length & 1) {
      temp.push(lists.pop())
    }
    for (let i = 0; i < lists.length; i += 2) {
      temp.push(mergeTwo(lists[i], lists[i + 1]))
    }
    lists = temp
  }
  return lists[0] ?? null
}
// @lc code=end
