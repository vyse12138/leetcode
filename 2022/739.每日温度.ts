/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [0]
  const result = new Array(temperatures.length).fill(0)

  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] < temperatures[stack.at(-1)]) {
      stack.push(i)
    } else if (temperatures[i] === temperatures[stack.at(-1)]) {
      stack.push(i)
    } else if (temperatures[i] > temperatures[stack.at(-1)]) {
      while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
        result[stack.at(-1)] = i - stack.pop()
      }
      stack.push(i)
    }
  }
  return result
}
// @lc code=end
