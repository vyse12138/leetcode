// Time complexity: O(n)
// Space complexity: O(1)
function add(a: number, b: number): number {
  while (b !== 0) {
    ;[a, b] = [a ^ b, (a & b) << 1]
  }
  return a
}
