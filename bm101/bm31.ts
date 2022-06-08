/*class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param pRoot TreeNode类
 * @return bool布尔型
 */
export function isSymmetrical(pRoot: TreeNode): boolean {
  if (!pRoot) return true
  let flag = true
  const rec = (left: TreeNode, right: TreeNode) => {
    if (!flag || (!left && !right)) {
      return
    }
    if (!left || !right) {
      flag = false
      return
    }
    if (left.val !== right.val) {
      flag = false
    }

    rec(left.left, right.right)
    rec(left.right, right.left)
  }

  rec(pRoot.left, pRoot.right)
  return flag
}
