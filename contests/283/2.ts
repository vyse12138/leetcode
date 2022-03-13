function minimalKSum(nums: number[], k: number): number {
  const set = new Set<number>()

  nums.sort((a, b) => a - b)

  let sum = ((1 + k) * k) / 2

  for (const n of nums) {
    if (n <= k && !set.has(n)) {
      k++
      sum += k - n
    }
    set.add(n)
  }

  return sum
}
