// Time complexity: O(n)
// Space complexity: O(n)
function getIntersectionNode(headA, headB) {
  let set = new Set()

  while (headA) {
    set.add(headA)
    headA = headA.next
  }

  while (headB) {
    if (set.has(headB)) {
      return headB
    }
    headB = headB.next
  }

  return null
}

function getIntersectionNode2(headA, headB) {
  let a = headA,
    b = headB
  while (a !== b) {
    a = a !== null ? a.next : headB
    b = b !== null ? b.next : headA
  }
  return a
}
