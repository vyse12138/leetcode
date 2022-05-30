// Time complexity: O(n)
// Space complexity: O(n)
function strToInt(str: string): number {
  let a = str.trim().split('')
  let sign = 1
  let res = 0

  let max = 2 ** 31 - 1
  let min = (-2) ** 31
  if (a[0] === '-') {
    a.shift()
    sign = -1
  } else if (a[0] === '+') {
    a.shift()
  }
  while (!isNaN(parseInt(a[0]))) {
    res *= 10
    res += parseInt(a.shift())
    if (res * sign <= min) return min
    if (res > max) return max
  }
  return res * sign
}

// Time complexity: O(n)
// Space complexity: O(n)
function strToInt2(str: string): number {
  let a = str.trim()
  let sign = 1
  let i = 0
  let res = 0

  let max = 2 ** 31 - 1
  let min = (-2) ** 31
  let n = '0'.charCodeAt(0)
  if (a[0] === '-') {
    sign = -1
    i = 1
  } else if (a[0] === '+') {
    i = 1
  }
  for (; i < a.length; i++) {
    let c = a.charCodeAt(i)
    if (c - n > 9 || c - n < 0) break

    res = res * 10 + parseInt(a[i])

    if (res * sign <= min) return min
    if (res > max) return max
  }
  return sign * res
}
