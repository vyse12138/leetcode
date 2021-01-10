/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*-----solution-----
Set up a dummy head, keep iterating when l1 and l2 are both not null
compare val at l1 and l2, append smaller one to the dummy head's list.
Then append left over list.


Time complexity is O(n + m) where n and m are the length of l1 and l2
Space complexity is O(1)
*/
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let pointer = dummyHead;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        pointer.next = l1;
        l1 = l1.next;
      }
      else {
        pointer.next = l2;
        l2 = l2.next;
      }
      pointer = pointer.next;
    }
    pointer.next = (l1 === null) ? l2 : l1;
    return dummyHead.next;
};