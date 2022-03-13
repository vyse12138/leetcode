function cellsInRange(s: string): string[] {
  let res = []

  let ss = s.split('')
  let colS = ss[0]
  let colE = ss[3]
  let rowS = ss[1]
  let rowE = ss[4]

  for (let i = colS.charCodeAt(0); i <= colE.charCodeAt(0); i++) {
    for (let j = parseInt(rowS); j <= parseInt(rowE); j++) {
      let temp = String.fromCharCode(i)
      res.push(`${temp}${j}`)
    }
  }
  return res
}
