// Time complexity: O(n)
// Space complexity: O(n)
function pathSum(root: TreeNode | null, target: number): number[][] {
  let res: number[][] = []

  const dfs = (node: TreeNode, temp: number[], sum: number) => {
    if (!node) {
      return
    }
    temp = temp.concat(node.val)
    sum += node.val
    if (!node.left && !node.right && sum === target) {
      res.push(temp)
      return
    }

    dfs(node.left, temp, sum)
    dfs(node.right, temp, sum)
  }

  dfs(root, [], 0)

  return res
}
