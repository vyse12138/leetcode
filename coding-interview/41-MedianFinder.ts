// Time complexity: O(n log n)
// Space complexity: O(n)
class MedianFinder {
  constructor() {}
  arr: number[] = []

  addNum(num: number): void {
    this.arr.push(num)
    this.arr.sort((a, b) => a - b)
  }

  findMedian(): number {
    let mid = Math.floor(this.arr.length / 2)
    if (this.arr.length % 2) {
      return this.arr[mid]
    } else {
      return (this.arr[mid] + this.arr[mid - 1]) / 2
    }
  }
}
