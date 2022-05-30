// Time complexity: O(n! * n)
// Space complexity: O(n ^ 2)
function permutation(s: string): string[] {
  const input: string[] = s.split('')
  const res: string[] = []
  const dfs = (x: number) => {
    if (x === input.length - 1) {
      res.push(input.join(''))
      return
    }
    let set = new Set()
    for (let i = x; i < input.length; i++) {
      if (set.has(input[i])) {
        continue
      }
      set.add(input[i])
      ;[input[i], input[x]] = [input[x], input[i]]
      dfs(x + 1)
      ;[input[i], input[x]] = [input[x], input[i]]
    }
  }

  dfs(0)

  return res
}
