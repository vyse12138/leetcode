function findEvenNumbers(digits: number[]): number[] {
  let map = new Map<number, number>()
  let dd = []
  digits.forEach(e => {
    if (!map.has(e)) {
      map.set(e, 1)
      dd.push(e)
    } else {
      if (map.get(e) <= 3) {
        dd.push(e)
        map.set(e, map.get(e) + 1)
      }
    }
  })
  const recur = (n, used) => {
    if (path.length === 3) {
      let temp = Number(path.join(''))
      if (!res.includes(temp)) {
        res.push(temp)
      }
      return
    }
    for (let i = 0; i < dd.length; i++) {
      if (used[i]) continue
      path.push(n[i])
      used[i] = true
      recur(n, used)
      path.pop()
      used[i] = false
    }
  }

  const res: number[] = [],
    path = []
  recur(dd, [])
  return res.filter(e => e >= 100 && e % 2 === 0).sort((a, b) => a - b)
}
