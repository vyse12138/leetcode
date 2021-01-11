/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*----- solution -----
iterate the lsit and put all nodes in an array,
check if array is palindrome.
Time complexity is O(n)
Space complexity is O(n)
*/

var isPalindrome = function(head) {
  let pointer = head, stack =[];
  while (pointer) {
    stack.push(pointer.val);
    pointer = pointer.next;
  }
  return stack.toString() == stack.slice().reverse().toString();
};


/*----- solution -----
Step1: use fast slow pointer to find the middle node of the list.
Step2: reverse the list from the middle node to the end.
Step3: compare the list before and after the middle node. (check palindrome)
Time complexity is O(n)
Space complexity is O(1)
*/

var isPalindrome = function(head) {
  if (!head) {
      return true;
  }
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let pointer = slow.next, previous = null, next = null;
  while (pointer) { 
    next = pointer.next;
    pointer.next = previous;
    previous = pointer;
    pointer = next;
  }
  while (previous) { 
    if (head.val !== previous.val) {
      return false;
    }
    head = head.next;
    previous = previous.next;
  }
  return true;
};