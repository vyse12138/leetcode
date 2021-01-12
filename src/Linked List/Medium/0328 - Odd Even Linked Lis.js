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
Set up two linkedlist. One for odd and one for even.
iterate the orginal linkedlist and compute odd and even linkedlist.
Combind odd and even linkedlist.
Time complexity is O(n)
Space complexity is O(1)
*/
var oddEvenList = function(head) {
  if (head === null) {
      return head;
  }
let odd = head, even = head.next, evenHead = head.next;
while(even && even.next) {
odd.next = even.next;
odd = odd.next;
even.next = odd.next;
even = even.next;
}
odd.next = evenHead;
return head;
};