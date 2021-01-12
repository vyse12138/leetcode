/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

/*----- solution -----
Set up two linkedlist. One for odd and one for even.
iterate the orginal linkedlist and compute odd and even linkedlist.
Combind odd and even linkedlist.
Time complexity is O(n)
Space complexity is O(1)
*/
var reverseBetween = function(head, m, n) {
    let left = head,right = head;
    for (i = 0; i < n-m; i++) {
      right = right.next;
    }
    while (m-- > 0) {
      left = left.next;
      right = right.next;
    }
    head.next = right;
    left.next = right.next;
    right.next = null;


    let previous = null, next = null;
    while (left) { 
      next = left.next;
      left.next = previous;
      previous = left;
      left = next;
    }
    return head;
};