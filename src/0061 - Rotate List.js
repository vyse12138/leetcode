/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/*----- solution 1 -----
Two iteration. 
In the first one, find the length of the list,
then attach the last node to the first.
In the second one, iteration length - k time, 
then cut the list from here and return the next node.
Time complexity is O(n)
Space complexity is O(1)
*/
var rotateRight = function (head, k) {
  if (!head) {
    return null;
  }
  let pointer = head, length = 1;
  while (pointer.next) {
    length++;
    pointer = pointer.next;
  }
  pointer.next = head;
  pointer = head;
  let step = length - k % length;
  while (step-- > 1) {
    pointer = pointer.next;
  }
  let result = pointer.next;
  pointer.next = null;
  return result;
};