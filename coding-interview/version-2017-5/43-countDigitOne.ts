// Time complexity: O(log n)
// Space complexity: O(1)
function countDigitOne(n: number): number {
  let digits = 1,
    res = 0,
    high = Math.floor(n / 10),
    cur = n % 10,
    low = 0

  while (high !== 0 || cur !== 0) {
    if (cur === 0) {
      res += high * digits
    } else if (cur === 1) {
      res += high * digits + low + 1
    } else {
      res += high * digits + digits
    }
    low += cur * digits
    ;(cur = high % 10), (high = Math.floor(high / 10)), (digits *= 10)
  }

  return res
}
