// Time complexity: O(10 ** n)
// Space complexity: O(1)
function printNumbers(n: number): number[] {
  const res = []
  for (let i = 1; i < 10 ** n; i++) {
    res.push(i)
  }
  return res
}
