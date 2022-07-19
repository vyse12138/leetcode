/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
  constructor() {}

  arr1: number[] = []
  arr2: number[] = []

  push(x: number): void {
    this.arr1.push(x)
  }

  pop(): number {
    if (this.arr2.length) {
      return this.arr2.pop()
    }

    while (this.arr1.length) {
      this.arr2.push(this.arr1.pop())
    }
    return this.arr2.pop()
  }

  peek(): number {
    return this.arr2.length ? this.arr2[this.arr2.length - 1] : this.arr1[0]
  }

  empty(): boolean {
    if (this.arr1.length + this.arr2.length === 0) {
      return true
    }
    return false
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
