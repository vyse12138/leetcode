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

/*-----solution 1-----
Iterate the list, set the next of the current node to its previous one.
Time complexity is O(n)
Space complexity is O(1)
*/
var reverseList = function(head) {
    let pointer = head, previous = null, next = null;
    while (pointer) { 
      next = pointer.next;
      pointer.next = previous;
      previous = pointer;
      pointer = next;
    }
    return previous;
};