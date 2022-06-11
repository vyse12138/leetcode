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
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
export function lowestCommonAncestor(
  root: TreeNode,
  p: number,
  q: number
): number {
  let leftPath: number[] = [],
    rightPath: number[] = []
  let node = root

  while (true) {
    if (!node) break
    leftPath.push(node.val)
    if (node.val > p) {
      node = node.left
    } else {
      node = node.right
    }
  }

  node = root

  while (true) {
    if (!node) break
    rightPath.push(node.val)
    if (node.val > q) {
      node = node.left
    } else {
      node = node.right
    }
  }

  let res = 0
  while (leftPath.length > 0 && rightPath.length > 0) {
    let left = leftPath.shift()
    let right = rightPath.shift()

    if (left === right) {
      res = left
    }
  }
  return res
}
