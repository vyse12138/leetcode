// Time complexity: O(n)
// Space : O(1)
function hammingWeight(n: number) {
  let res = 0
  while (n) {
    res += n & 1
    n >>>= 1
  }
  return res
}

// Time complexity: O(m) where m is the number of 1s
// Space complexity: O(1)
function hammingWeight2(n) {
  let res = 0
  while (n) {
    res += 1
    n &= n - 1
  }
  return res
}
