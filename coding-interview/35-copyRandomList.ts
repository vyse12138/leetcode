// Definition for a Node.
class Node2 {
  constructor(val, next?, random?) {
    this.val = val
    this.next = next
    this.random = random
  }
  val
  next
  random
}
// Time complexity: O(n)
// Space complexity: O(n)
function copyRandomList(head) {
  if (!head) return null
  let map = new Map()
  let cur = head
  while (cur) {
    map.set(cur, new Node2(cur.val))
    cur = cur.next
  }

  cur = head

  while (cur) {
    map.get(cur).next = map.get(cur.next) ?? null
    map.get(cur).random = map.get(cur.random)
    cur = cur.next
  }
  return map.get(head)
}
