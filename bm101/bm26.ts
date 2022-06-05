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
 * @param root TreeNode类
 * @return int整型二维数组
 */
export function levelOrder(root: TreeNode): number[][] {
  const res: number[][] = []

  const queue = [root]

  while (queue.length > 0) {
    let count = queue.length
    let row: number[] = []

    while (count-- > 0) {
      const node = queue.shift()
      row.push(node.val)

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    res.push(row)
  }

  return res
}
