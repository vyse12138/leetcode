function minSteps(s: string, t: string): number {
  const map1 = new Map<string, number>()
  const map2 = new Map<string, number>()

  for (const char of s) {
    if (!map1.has(char)) {
      map1.set(char, 1)
    } else {
      map1.set(char, map1.get(char) + 1)
    }
  }

  for (const char of t) {
    if (!map2.has(char)) {
      map2.set(char, 1)
    } else {
      map2.set(char, map2.get(char) + 1)
    }
  }

  let arr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]

  let res = 0

  for (const char of arr) {
    let a = map1.get(char)
    let b = map2.get(char)
    if (!a && !b) {
      continue
    } else if (!a) {
      res += b
    } else if (!b) {
      res += a
    } else {
      res += Math.abs(a - b)
    }
  }

  return res
}
