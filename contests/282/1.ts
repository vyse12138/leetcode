function prefixCount(words: string[], pref: string): number {
  let res = 0

  words.forEach(w => {
    if (w.slice(0, pref.length) === pref) {
      res++
    }
  })

  return res
}
