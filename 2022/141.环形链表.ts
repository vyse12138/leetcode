/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  let [slow, fast] = [head, head?.next]
  while (true) {
    if (!fast || !fast.next) {
      return false
    }

    if (slow === fast) {
      return true
    }

    slow = slow.next
    fast = fast.next.next
  }
}
// @lc code=end
