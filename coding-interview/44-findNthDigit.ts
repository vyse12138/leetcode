// Time complexity: O(log n)
// Space complexity: O(1)
function findNthDigit(n: number): number {
  let digits = 1,
    start = 1,
    count = 9

  while (n > count) {
    n -= count
    start *= 10
    digits += 1
    count = 9 * start * digits
  }

  let num = start + (n - 1) / digits

  return Number(num.toString()[(n - 1) % digits])
}
