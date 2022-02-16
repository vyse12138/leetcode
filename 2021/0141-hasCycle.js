/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*----- solution 1 -----
Set up two pointer, one is fast, the other is slow.
In iteration, fast move twice and slow move once.
When fast reaches the end of the list, return false.
When fast and slow meet each other, return true.
Time complexity is O(n)
Space complexity is O(1)
*/
var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false
  }
  let slow = head,
    fast = head.next
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
