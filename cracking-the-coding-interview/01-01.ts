function isUnique(astr: string): boolean {
  const set = new Set<string>()
  for (const char of astr) {
    if (set.has(char)) {
      return false
    }
    set.add(char)
  }
  return true
}

function isUnique2(astr: string): boolean {
  let flag = 0
  const start = 'a'.charCodeAt(0)
  for (const char of astr) {
    const offset = char.charCodeAt(0) - start
    if ((flag & (1 << offset)) !== 0) {
      return false
    } else {
      flag |= 1 << offset
    }
  }
  return true
}
