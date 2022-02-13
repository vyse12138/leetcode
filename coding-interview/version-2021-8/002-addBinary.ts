// Time complexity: O(n)
// Space complexity: O(n)
function addBinary(a: string, b: string): string {
  let length = Math.max(a.length, b.length)
  a = a.padStart(length, '0')
  b = b.padStart(length, '0')

  let c = 0
  let res: number[] = []
  for (let i = length - 1; i >= 0; i--) {
    let temp: number = Number(a[i]) + Number(b[i]) + c

    if (temp > 1) {
      temp -= 2
      c = 1
    } else {
      c = 0
    }

    res.unshift(temp)
  }
  if (c === 1) {
    res.unshift(1)
  }
  return res.join('')
}

// Time complexity: O(1)
// Space complexity: O(1)
// Note: range limit at 64
function addBinary2(a: string, b: string): string {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}
