/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

/*----- solution 1 -----
Recursion.
Time complexity is O(n) 
Space complexity is O(n)
*/
var sortedListToBST = function (head) {
  let findMid = (left, right) => {
    let fast = left, slow = left;
    while (fast != right && fast.next != right) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  let buildTree = (left, right) => {
    if (left == right) {
      return null;
    }
    let mid = findMid(left, right);
    let node = new TreeNode(mid.val);
    node.left = buildTree(left, mid);
    node.right = buildTree(mid.next, right);
    return node;
  }
  return buildTree(head, null);
};