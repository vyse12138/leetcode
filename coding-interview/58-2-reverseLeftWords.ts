// Time complexity: O(n)
// Space complexity: O(1)
function reverseLeftWords(s: string, n: number): string {
  return s.substring(n, s.length).concat(s.substring(0, n))
}

// Time complexity: O(n)
// Space complexity: O(n)
function reverseLeftWords2(s: string, n: number): string {
  let arr = s.split('')
  while (n--) {
    arr.push(arr.shift())
  }
  return arr.join('')
}
