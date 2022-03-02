/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start

class DLNode {
  constructor(
    key = 0,
    val = 0,
    next: DLNode | null = null,
    previous: DLNode | null = null
  ) {
    this.key = key
    this.val = val
    this.next = next
    this.previous = previous
  }
  key: number
  val: number
  next: DLNode | null
  previous: DLNode | null
}

class LRUCache {
  constructor(capacity: number) {
    this.capacity = capacity
    this.head = new DLNode()
    this.tail = new DLNode()
    this.head.next = this.tail
    this.tail.previous = this.head
  }

  capacity = 0
  count = 0
  map = new Map<number, DLNode>()
  head: DLNode
  tail: DLNode

  get(key: number): number {
    if (this.map.has(key)) {
      let node = this.map.get(key)
      this.moveToHead(node)

      return node.val
    } else {
      return -1
    }
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      let node = this.map.get(key)
      node.val = value
      this.moveToHead(node)
    } else {
      let node = new DLNode(key, value)
      this.map.set(key, node)
      this.addToHead(node)
      this.count++
      if (this.count > this.capacity) {
        let node = this.removeTail()
        this.map.delete(node.key)
        this.count--
      }
    }
  }

  removeNode = (node: DLNode) => {
    node.previous.next = node.next
    node.next.previous = node.previous
  }

  addToHead = (node: DLNode) => {
    node.previous = this.head
    node.next = this.head.next

    this.head.next.previous = node
    this.head.next = node
  }

  moveToHead = (node: DLNode) => {
    this.removeNode(node)
    this.addToHead(node)
  }

  removeTail = () => {
    let node = this.tail.previous
    this.removeNode(node)
    return node
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
