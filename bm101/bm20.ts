/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param data int整型一维数组
 * @return int整型
 */
export function InversePairs(data: number[]): number {
  let res = 0
  const mod = 1000000007
  const temp = []
  const rec = (left: number, right: number): number => {
    if (left >= right) return 0

    const mid = (left + right) / 2
    let res = rec(left, mid) + rec(mid + 1, right)

    res %= mod

    for (let i = left; i < right; i++) {
      temp[i] = data[i]
    }

    return res % mod
  }
  return res
}
