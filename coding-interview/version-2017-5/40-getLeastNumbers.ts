// Time complexity: O(n log n)
// Space complexity: O(1)
function getLeastNumbers(arr: number[], k: number): number[] {
  return arr.sort((a, b) => a - b).slice(0, k)
}
