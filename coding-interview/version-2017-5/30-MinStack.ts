// Time complexity: O(1)
// Space complexity: O(n)
class MinStack {
  stack: number[] = []
  helper: number[] = []

  push(x: number): void {
    this.stack.push(x)
    if (!this.helper.length || x <= this.helper[this.helper.length - 1]) {
      this.helper.push(x)
    }
  }

  pop(): void {
    if (this.stack.pop() === this.helper[this.helper.length - 1]) {
      this.helper.pop()
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  min(): number {
    return this.helper[this.helper.length - 1]
  }
}
