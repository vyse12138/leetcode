// Time complexity: O(1)
// Space complexity: O(1)
function cuttingRope(n: number): number {
  if (n <= 3) return n - 1

  let m = Math.floor(n / 3)
  let r = n % 3

  if (r === 0) return 3 ** m
  if (r === 1) return 3 ** (m - 1) * 4
  if (r === 2) return 3 ** m * 2
}
