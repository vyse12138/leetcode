/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack2 {
  stack: number[] = []
  min: number[] = []

  push(val: number): void {
    this.stack.push(val)
    if (!this.min.length || val <= this.min[this.min.length - 1]) {
      this.min.push(val)
    }
  }

  pop(): void {
    let p = this.stack.pop()
    if (p === this.min[this.min.length - 1]) {
      this.min.pop()
    }
  }
  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.min[this.min.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
