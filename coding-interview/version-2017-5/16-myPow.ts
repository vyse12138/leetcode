// Time complexity: O(n)
// Space complexity: O(1)
function myPow(x: number, n: number): number {
  let res = 1
  let sign = n !== Math.abs(n)
  n = Math.abs(n)

  while (n--) {
    res *= x
  }
  return sign ? 1 / res : res
}

// Time complexity: O(log n)
// Space complexity: O(1)
function myPow2(x: number, n: number): number {
  if (x === 0) return 0

  let res = 1
  let sign = n !== Math.abs(n)
  n = Math.abs(n)

  while (n > 0) {
    if (n & 1) {
      res *= x
    }
    x *= x
    n >>> 1
  }
  return sign ? 1 / res : res
}

// Time complexity: O(log n)
// Space complexity: O(1)
function myPow3(x: number, n: number): number {
  if (x === 0) return 0
  if (n < 0) {
    x = 1 / x
    n = -n
  }

  let res = 1

  while (n > 0) {
    if (n & 1) {
      res *= x
    }
    x *= x
    n >>>= 1
  }
  return res
}
