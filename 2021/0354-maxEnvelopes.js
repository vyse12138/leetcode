/**
 * @param {number[][]} envelopes
 * @return {number}
 */

/*----- solution 1 -----
Using js API
Time complexity is O(n)
Space complexity is O(1)
*/
var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) {
    return 0
  }

  const n = envelopes.length
  envelopes.sort((e1, e2) => {
    if (e1[0] !== e2[0]) {
      return e1[0] - e2[0]
    } else {
      return e2[1] - e1[1]
    }
  })

  const f = new Array(n).fill(1)
  let ans = 1
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (envelopes[j][1] < envelopes[i][1]) {
        f[i] = Math.max(f[i], f[j] + 1)
      }
    }
    ans = Math.max(ans, f[i])
  }
  return ans
}
