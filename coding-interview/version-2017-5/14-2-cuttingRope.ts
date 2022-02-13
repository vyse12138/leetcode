// Time complexity: O(n)
// Space complexity: O(1)
function cuttingRope2(n: number): number {
  if (n <= 3) return n - 1
  if (n === 4) return n

  const MOD = 1000000007
  let res = 1

  while (n > 4) {
    res = (res * 3) % MOD
    n -= 3
  }
  return (res * n) % MOD
}
