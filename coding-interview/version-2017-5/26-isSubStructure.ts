// Time complexity: O(mn)
// Space complexity: O(m)
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (A === null || B === null) {
    return false
  }
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

const recur = (A: TreeNode, B: TreeNode): boolean => {
  if (B === null) {
    return true
  }
  if (A === null || A.val !== B.val) {
    return false
  }
  return recur(A.left, B.left) && recur(A.right, B.right)
}
