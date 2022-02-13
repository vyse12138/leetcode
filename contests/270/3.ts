function getDirections(
  root: TreeNode | null,
  startValue: number,
  destValue: number
): string {
  let gotS = false
  let gotD = false

  let res: string[] = []
  const dfs = (node: TreeNode) => {
    if (node === null || (gotD && gotS)) {
      if (gotS || gotD) {
        res.pop()
      }
      return
    }
    if (gotS && !gotD) res.push('L')
    dfs(node.left)

    if (node.val === startValue) gotS = true
    if (node.val === destValue) gotD = true
    if (gotS && !gotD) res.push('U')

    if (gotS && !gotD) res.push('R')
    dfs(node.right)
  }
  dfs(root)

  return res.join('')
}
