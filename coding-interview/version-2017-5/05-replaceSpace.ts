// Time complexity: O(n)
// Space complexity: O(1)
function replaceSpace(s: string): string {
  return s.replaceAll(' ', '%20')
}

// Time complexity: O(n)
// Space complexity: O(n)
function replaceSpace2(s: string): string {
  return s
    .split('')
    .map(e => (e === ' ' ? '%20' : e))
    .join('')
}
