function countEven(num: number): number {
  let res = 0
  for (let i = 1; i < num; i++) {
    const temp = i.toString().split('')
    const sum = temp.reduce((a, b) => {
      return (Number(a) + Number(b)).toString()
    })

    if (!(Number(sum) & 1)) {
      res++
    }
  }
  return res
}
