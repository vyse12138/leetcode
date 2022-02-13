// Time complexity: O(n)
// Space complexity: O(1)
function firstUniqChar(s: string): string {
  let map = new Map<string, number>()

  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (let char of s) {
    if (map.get(char) === 1) {
      return char
    }
  }

  return ' '
}

// Time complexity: O(n)
// Space complexity: O(1)
function firstUniqChar2(s: string): string {
  let map = new Map<string, number>()

  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (let [char, count] of map.entries()) {
    if (count === 1) {
      return char
    }
  }
  return ' '
}
