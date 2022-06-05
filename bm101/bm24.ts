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
 *
 * @param root TreeNode类
 * @return int整型一维数组
 */
export function inorderTraversal(root: TreeNode): number[] {
  const res = []

  const rec = (node: TreeNode) => {
    while (!node) return

    rec(node.left)
    res.push(node.val)
    rec(node.right)
  }

  rec(root)
  return res
}
