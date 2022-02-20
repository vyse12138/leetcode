function repeatLimitedString(s: string, repeatLimit: number): string {
  const map = new Map()
  const keys = []

  let done = false

  const getNext = () => {
    if (keys.length <= 1) {
      done = true
      return ''
    }
    if (map.get(keys[1]) !== 0) {
      map.set(keys[1], map.get(keys[1]) - 1)
      return keys[1]
    } else {
      keys.splice(1, 1)
      return getNext()
    }
  }

  for (const char of s) {
    if (map.get(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }
  for (const key of map.keys()) {
    keys.push(key)
  }
  keys.sort().reverse()

  let res = ''
  let repeat = 0

  while (keys.length && !done) {
    if (map.get(keys[0]) === 0) {
      repeat = 0
      keys.shift()
      continue
    }

    if (repeat === repeatLimit) {
      res = res.concat(getNext())
      repeat = 0
      continue
    }

    map.set(keys[0], map.get(keys[0]) - 1)
    repeat++
    res = res.concat(keys[0])
  }

  return res
}
