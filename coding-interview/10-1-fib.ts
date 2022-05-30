// Time complexity: O(2^n)
// Space complexity: O(1)
function fib(n: number): number {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

// Time complexity: O(n)
// Space complexity: O(1)
function fib2(n: number): number {
  const mod = 1000000007
  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, a + b]
    a = a % mod
    b = b % mod
  }
  return n === 0 ? 0 : b
}
