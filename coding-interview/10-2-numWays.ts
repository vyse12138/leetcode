// Time complexity: O(n)
// Space complexity: O(1)
function numWays(n: number): number {
  const mod = 1000000007
  let a = 0,
    b = 1
  for (let i = 1; i <= n; i++) {
    ;[a, b] = [b, a + b]
    a = a % mod
    b = b % mod
  }
  return n === 0 ? 1 : b
}
