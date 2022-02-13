// Time complexity(delete): O(n)
// Space complexity: O(1)
class CQueue {
  constructor() {}

  // For stack we can do push and pop
  stack1: number[] = []
  stack2: number[] = []

  appendTail(value: number): void {
    this.stack1.push(value)
  }

  deleteHead(): number {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
    const res = this.stack2.pop()

    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop())
    }

    return res ?? -1
  }
}

// Time complexity(delete): O(1)
// Space complexity: O(1)
class CQueue2 {
  constructor() {}

  // For stack we can do push and pop
  stack1: number[] = []
  stack2: number[] = []

  appendTail(value: number): void {
    this.stack1.push(value)
  }

  deleteHead(): number {
    const res = this.stack2.pop()
    if (res) {
      return res
    } else {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
      return this.stack2.pop() ?? -1
    }
  }
}
