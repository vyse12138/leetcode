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

/*----- solution 1 -----
Working on it
Time complexity is O(n)
Space complexity is O(1)
*/
var deleteDuplicates = function (head) {
  let dummyHead = ListNode(0,head),
  current = head, 
  previous = dummyHead,
  duplicate = false;
  while (current && current.next) {
    duplicate = false;
    while (current.val === current.next.val) {
      current.next = current.next.next;
      duplicate = true;
    }
    if (duplicate) {
      previous.next = current.next;
      current = current.next;
    }
    else {
      previous = previous.next;
      cur = cur.next;
    }
  }
  return dummyHead.next;
};