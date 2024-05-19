class MaxHeap {
  arr: number[];
  constructor(arr: Array<number> = []) {
    this.arr = this.buildMapHeap(arr);
  }

  delete() {
    this.arr.length--;
  }

  size() {
    return this.arr.length;
  }

  buildMapHeap(arr: Array<number>) {
    const len = arr.length;

    for (let i = Math.floor(len / 2); i >= 0; i--) {
      this.maxHeapify(arr, i, len);
    }

    return arr;
  }

  maxHeapify(arr: Array<number>, index: number, heapSize: number) {
    const leftIdx = index * 2 + 1;
    const rightIdx = index * 2 + 2;
    let largest = index;

    if (leftIdx < heapSize && arr[leftIdx] > arr[largest]) {
      largest = leftIdx;
    }

    if (rightIdx < heapSize && arr[rightIdx] > arr[largest]) {
      largest = rightIdx;
    }

    if (largest !== index) {
      this.swap(arr, index, largest);
      this.maxHeapify(arr, largest, heapSize);
    }
  }

  swap = (arr: Array<number>, i: number, j: number) => {
    const tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
  };
}

function findKthLargest(nums: Array<number>, k: number): number {
  const heap = new MaxHeap(nums);
  const size = heap.size();

  for (let i = size - 1; i >= size - k + 1; i--) {
    heap.swap(heap.arr, 0, i);
    heap.delete();
    heap.maxHeapify(heap.arr, 0, heap.size());
  }

  return heap.arr[0];
}

findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
