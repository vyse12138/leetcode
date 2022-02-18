/*
 * @lc app=leetcode.cn id=1791 lang=typescript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
function findCenter(edges: number[][]): number {
  const q1 = edges[0][0],
    q2 = edges[0][1],
    q3 = edges[1][0],
    q4 = edges[1][1]

  return q1 === q3 || q1 === q4 ? q1 : q2
}
// @lc code=end
