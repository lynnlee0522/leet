// 创建一个单调递减队列, 新元素如果比队列最后一个还小，则抛弃新元素
// 如果比队列最后一个元素大，则删掉最后一个元素，再和倒数第二个元素比较，以此类推
var maxSlidingWindow = function (nums, k) {
  const result = [];
  const queue = new MonotonicColumn(k);
  for (let i = 0; i < nums.length; i++) {
    queue.push(nums[i], i);
    if (i >= k - 1) {
      result.push(queue.get());
    }
  }
  return result;
};

class MonotonicColumn {
  constructor(len) {
    this.queue = [];
    this.idx = [];
    this.length = len;
  }
  push(num, idx) {
    if (this.idx.length > 0 && idx - this.idx[0] == this.length) {
      this.queue.shift();
      this.idx.shift()
    }
    while (this.queue.length > 0 && this.queue[this.queue.length - 1] < num) {
      this.queue.pop();
      this.idx.pop();
    }
    this.queue.push(num);
    this.idx.push(idx);
    console.log(this.queue);
  }

  get() {
    return this.queue[0];
  }
}

x = maxSlidingWindow([1, 3, 1, 2, 0, 5], 3);
console.log(x);
