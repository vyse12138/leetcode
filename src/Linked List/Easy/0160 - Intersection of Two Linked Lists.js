/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/*-----solution 1-----
For each ndoe in list A, iterate list B,
check if there is an identical node.
Time complexity is O(mn)
Space complexity is O(1)
*/
var getIntersectionNode = function(headA, headB) {
  while(headA) {
    let pointer = headB;
    while(pointer) {
      if (headA === pointer){
        return headA;
      }
      pointer = pointer.next;
    }
    headA = headA.next;
  }
  return null;
};

/*-----solution 2-----

Time complexity is O(m + n)
Space complexity is O(1)
*/
var getIntersectionNode = function(headA, headB) {
  let pointerA = headA, pointerB = headB;
  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next: headB;
    pointerB = pointerB ? pointerB.next: headA;
  }
  return pointerA;
};