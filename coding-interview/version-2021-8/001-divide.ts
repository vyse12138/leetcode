// Time complexity: O(1)
// Space complexity: O(1)
function divide(a: number, b: number): number {
  const MAX = 2 ** 31 - 1
  const MIN = -(2 ** 31)

  if (a == MIN && b == -1) return MAX
  if (a == MIN && b == 1) return MIN

  const sign = a > 0 === b > 0

  a = Math.abs(a)
  b = Math.abs(b)

  let res = 0

  for (let i = 31; i >= 0; i--) {
    if (a >>> i >= b) {
      a -= b << i
      res += 1 << i
    }
  }

  return sign ? res : -res
}
