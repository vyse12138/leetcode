/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*----- solution 1 -----
Two iterations,
In the first one, get the length of the list.
Then we can find the position of the node that 
we want to delete from the start.
In the second iteration, go to the position and delete it.
Time complexity is O(n)
Space complexity is O(1)
*/
var removeNthFromEnd = function (head, n) {
  let count = 0,
    pointer = head,
    dummyHead = new ListNode(0, head)
  while (pointer) {
    count++
    pointer = pointer.next
  }
  count -= n
  pointer = dummyHead
  while (pointer && pointer.next) {
    if (count == 0) {
      pointer.next = pointer.next.next
    }
    count--
    pointer = pointer.next
  }
  return dummyHead.next
}

/*----- solution 2 -----
Two pointers.
Let fast pointer proceed n time in the listnode,
then let fast and slow proceed together.
When fast meets the end, slow meets the ndoe we wan to delete.
delete it.
Time complexity is O(n)
Space complexity is O(1)
*/
var removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(0, head),
    fast = head,
    slow = dummyHead
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummyHead.next
}
