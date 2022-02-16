/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/*----- solution 1 -----
See solution 2
Time complexity is O(n)
Space complexity is O(1)
*/
var removeElements = function (head, val) {
  let dummyHead = new ListNode(0, head),
    pointer = dummyHead
  while (pointer.next) {
    while (pointer.next && pointer.next.val === val) {
      pointer.next = pointer.next.next
    }
    pointer = pointer.next
  }
  return dummyHead.next
}

/*----- solution 2 -----
Iterate the list, find the node need to be deleted,
delete it.
Time complexity is O(n)
Space complexity is O(1)
*/
var removeElements = function (head, val) {
  let dummyHead = new ListNode(0, head),
    pointer = dummyHead
  while (pointer.next) {
    if (pointer.next.val === val) {
      pointer.next = pointer.next.next
    } else {
      pointer = pointer.next
    }
  }
  return dummyHead.next
}
