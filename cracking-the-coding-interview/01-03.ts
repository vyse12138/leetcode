function replaceSpaces(S: string, length: number): string {
  return S.split('')
    .slice(0, length)
    .map(e => {
      if (e === ' ') {
        e = '%20'
      }

      return e
    })
    .join('')
}

function replaceSpaces2(S: string, length: number): string {
  return S.slice(0, length).replaceAll(' ', '%20')
}
