// Time complexity: O(1)
// Space complexity: O(1)

function isNumber(s: string): boolean {
  if (s === ' ') {
    return false
  }

  return !isNaN(Number(s))
}
