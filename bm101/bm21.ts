/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param rotateArray int整型一维数组
 * @return int整型
 */
export function minNumberInRotateArray(rotateArray: number[]): number {
  let low = 0,
    high = rotateArray.length - 1

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)

    if (rotateArray[mid] > rotateArray[high]) {
      low = mid + 1
    } else if (rotateArray[mid] < rotateArray[high]) {
      high = mid
    } else {
      high--
    }
  }
  return rotateArray[low]
}
