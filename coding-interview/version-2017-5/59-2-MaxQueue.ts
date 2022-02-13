// Time complexity: O(n)
// Space complexity: O(1)
class MaxQueue {
  helper: number[] = []
  queue: number[] = []

  max_value(): number {
    return this.helper[0] ?? -1
  }

  push_back(value: number): void {
    this.queue.push(value)

    while (this.helper.length && this.helper[this.helper.length - 1] < value) {
      this.helper.pop()
    }

    this.helper.push(value)
  }

  pop_front(): number {
    let pop = this.queue.shift()

    if (pop === this.helper[0]) {
      this.helper.shift()
    }

    return pop ?? -1
  }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
