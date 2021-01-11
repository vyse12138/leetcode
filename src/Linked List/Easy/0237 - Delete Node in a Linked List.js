/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

/*----- solution -----
Change the val to the next node,
delete the next node.
Time complexity is O(1)
Space complexity is O(1)
*/
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};