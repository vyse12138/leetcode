// Time complexity: O(n)
// Space complexity: O(1)
function lastRemaining(n: number, m: number): number {
  let x = 0

  for (let i = 2; i <= n; i++) {
    x = (x + m) % i
  }
  return x
}
