var items = [, 2, 3, 4, 5, 6];

// 原地建堆
const buildHeap = (items) => {
  const len = items.length;

  // 从最后一个根节点开始
  for (let i = Math.floor(len / 2); i > 0; i--) {
    heapify(items, i, len);
  }
};

// 构建小根堆
const heapify = (items, i, size) => {
  while (true) {
    let maxIndex = i;
    // 找到左右子树最大值, 和根交换
    if (2 * i < size && items[2 * i] > items[maxIndex]) {
      maxIndex = 2 * i;
    }
    if (2 * i + 1 < size && items[2 * i + 1] > items[maxIndex]) {
      maxIndex = 2 * i + 1;
    }

    if (maxIndex === i) break;
    swap(items, maxIndex, i);
    i = maxIndex;
  }
};

const swap = (items, i, j) => {
  const temp = items[j];
  items[j] = items[i];
  items[i] = temp;
};

// 堆排序
// 将最后一个
const sortHeap = (items) => {
  buildHeap(items);
  const sortedHeap = [];

  while (items.length > 1) {
    swap(items, 1, items.length - 1);
    sortedHeap.push(items.pop());
    if (items.length > 2) {
      heapify(items, 1, items.length);
    }
  }

  return sortedHeap;
};

// 插入到二叉树最后一个，然后再和根作比较，一直比到顶端
const insertHeap = (key) => {
  items.push(key);
  let parent = Math.floor((items.length - 1) / 2);
  let son = items.length - 1;
  while (parent > 0 && items[son] > items[parent]) {
    swap(items, parent, son);
    son = parent;
    parent = Math.floor(parent / 2);
  }
};

const popHeap = () => {
  swap(items, 1, items.length - 1);
  items.pop();
  heapify(items, 1, items.length);
};


buildHeap(items);
console.log("--items1--", items);
popHeap();
console.log("--items3--", items);
// console.log(sortHeap(items));
