/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
  constructor() {}

  arr1: number[] = []
  arr2: number[] = []

  push(x: number): void {
    this.arr2.push(x)
    while (this.arr1.length) {
      this.arr2.push(this.arr1.shift())
    }
    ;[this.arr1, this.arr2] = [this.arr2, this.arr1]
  }

  pop(): number {
    return this.arr1.shift()
  }

  top(): number {
    return this.arr1[0]
  }

  empty(): boolean {
    return this.arr1.length === 0
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
