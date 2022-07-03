function decodeMessage(key: string, message: string): string {
  let res = ''
  const keyMap = new Map<string, number>()
  let index = 0
  for (let i = 0; i < key.length; i++) {
    if (!keyMap.has(key[i]) && key[i] !== ' ') {
      keyMap.set(key[i], index++)
    }
  }

  const a = 97
  for (let i = 0; i < message.length; i++) {
    const code = message[i]
    if (code === ' ') {
      res += ' '
    } else {
      const temp = keyMap.get(code) + a
      const ss = String.fromCharCode(temp)
      res += ss
    }
  }
  return res
}
