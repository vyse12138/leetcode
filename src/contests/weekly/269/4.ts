function findAllPeople(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  meetings.sort((a, b) => a[2] - b[2])

  let ans = new Array(n).fill(false)
  ans[0] = true
  ans[firstPerson] = true

  for (let i = 0; i < meetings.length; i++) {
    if (ans[meetings[i][0]]) {
      let also = meetings.filter(e => {
        if (e[2] === meetings[i][2]) {
          if (e[1] === meetings[i][0] || e[0] === meetings[i][0]) {
            return true
          }
        }
      })

      also.forEach(e => {
        ans[e[0]] = true
        ans[e[1]] = true
      })
      ans[meetings[i][1]] = true
    } else if (ans[meetings[i][1]]) {
      let also = meetings.filter(e => {
        if (e[2] === meetings[i][2]) {
          if (e[1] === meetings[i][1] || e[0] === meetings[i][1]) {
            return true
          }
        }
      })

      also.forEach(e => {
        ans[e[0]] = true
        ans[e[1]] = true
      })
      ans[meetings[i][0]] = true
    }
  }

  let res = []

  for (let i = 0; i < ans.length; i++) {
    if (ans[i]) {
      res.push(i)
    }
  }
  return res
}
