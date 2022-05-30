// Time complexity: O(n)
// Space complexity: O(1)
function minArray(numbers: number[]): number {
  return Math.min(...numbers)
}

// Time complexity: O(log n)
// Space complexity: O(1)
function minArray2(numbers: number[]): number {
  let low = 0,
    high = numbers.length - 1

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)

    if (numbers[mid] > numbers[high]) {
      low = mid + 1
    } else if (numbers[mid] < numbers[high]) {
      high = mid
    } else {
      high--
    }
  }
  return numbers[low]
}
