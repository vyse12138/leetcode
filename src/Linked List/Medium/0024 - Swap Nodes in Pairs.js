/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*----- solution -----
Example [1,2,3,4,5,6,7]
Pointing at 1: Set 1.next to 4, 2.next to 1;
Pointing at 3: Set 3.next to 6, 4.next to 3;
Pointing at 5: Set 5.next to 7, 6.next to 5;
Time complexity is O(n)
Space complexity is O(1)
*/
var swapPairs = function (head) {
  let pointer = head, next = null, nextNext = null;
  if (!head) {
    return null;
  }
  let dummyHead = head.next ? head.next : head;
  while (pointer && pointer.next) {
    next = pointer.next;
    nextNext = next.next;
    if (pointer.next.next) {
      pointer.next = pointer.next.next.next ? pointer.next.next.next : pointer.next.next;
    }
    else {
      pointer.next = null;
    }
    next.next = pointer;
    pointer = nextNext;
  }
  return dummyHead;
};