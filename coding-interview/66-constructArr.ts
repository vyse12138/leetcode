// Time complexity: O(n)
// Space complexity: O(1)
function constructArr(a: number[]): number[] {
  const b: number[] = new Array(a.length).fill(1)
  let temp = 1
  for (let i = 1; i < b.length; i++) {
    b[i] = b[i - 1] * a[i - 1]
  }

  for (let i = b.length - 2; i >= 0; i--) {
    temp *= a[i + 1]
    b[i] *= temp
  }

  return b
}
