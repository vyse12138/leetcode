/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const res: string[] = []
  let temp = []
  const rec = (leftCount: number, rightCount: number) => {
    if (rightCount === n) {
      res.push(temp.join(''))
      return
    }

    if (leftCount === rightCount) {
      temp.push('(')
      rec(leftCount + 1, rightCount)
      temp.pop()
    } else {
      if (leftCount < n) {
        temp.push('(')
        rec(leftCount + 1, rightCount)
        temp.pop()
      }

      temp.push(')')
      rec(leftCount, rightCount + 1)
      temp.pop()
    }
  }

  rec(0, 0)

  return res
}
// @lc code=end
