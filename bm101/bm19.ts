/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */

;[2, 4, 1, 2, 7, 8, 4]

export function findPeakElement(nums: number[]): number {
  const peaks: number[] = []
  let goingUp = true
  let goingDown = false

  for (let i = 1; i < nums.length; i++) {
    if (goingUp && nums[i] < nums[i - 1]) {
      return i - 1
    } else if (goingDown && nums[i] > nums[i - 1]) {
      return i - 1
    }
    goingUp = nums[i] > nums[i - 1] ? true : false
    goingDown = nums[i] < nums[i - 1] ? true : false
  }
}
