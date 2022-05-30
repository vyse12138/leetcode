export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
function reversePrint(head: ListNode | null): number[] {
  const res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  return res.reverse()
}

// Time complexity: O(n)
// Space complexity: O(1)
function reversePrint2(head: ListNode | null): number[] {
  const res = []
  while (head) {
    res.unshift(head.val)
    head = head.next
  }
  return res
}

// Time complexity: O(n)
// Space complexity: O(1)
function reversePrint3(head: ListNode | null): number[] {
  if (!head) return []
  const res = []

  const rec = (node: ListNode) => {
    if (!node.next) {
      res.push(node.val)
      return
    }
    rec(node.next)
    res.push(node.val)
  }
  rec(head)

  return res
}

// Time complexity: O(n)
// Space complexity: O(1)
function reversePrint4(head: ListNode | null): number[] {
  return head ? reversePrint(head.next).concat(head.val) : []
}
