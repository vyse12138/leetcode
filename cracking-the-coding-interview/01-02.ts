function CheckPermutation(s1: string, s2: string): boolean {
  return s1.split('').sort().join('') === s2.split('').sort().join('')
}

function CheckPermutation2(s1: string, s2: string): boolean {
  let map = new Map<string, number>()
  let res = true

  for (const char of s1) {
    map.set(char, map.get(char) + 1 || 1)
  }

  for (const char of s2) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1)
    } else {
      res = false
    }
  }

  map.forEach(value => {
    if (value !== 0) {
      res = false
    }
  })

  return res
}
