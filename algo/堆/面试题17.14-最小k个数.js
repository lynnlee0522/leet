arr = [, 1, 3, 5, 7, 2, 4, 6, 8];

const buildHeap = (items, size) => {
  if (items.length === 2) {
    return items;
  }

  for (i = Math.floor(size / 2); i > 0; i--) {
    heapify(items, i);
  }
};

const heapify = (items, i) => {
  const size = items.length;

  while (true) {
    let minIndex = i;

    if (i * 2 < size && items[i * 2] < items[minIndex]) {
      minIndex = 2 * i;
    }
    if (i * 2 + 1 < size && items[2 * i + 1] < items[minIndex]) {
      minIndex = 2 * i + 1;
    }

    if (minIndex === i) break;
    swap(items, minIndex, i);
    i = minIndex;
  }
};

const sort = (items) => {
  const newArr = [];

  while (items.length > 1) {
    swap(items, 1, items.length - 1);
    newArr.push(items.pop());
    heapify(items, 1);
  }

  return newArr
};

const swap = (items, i, j) => {
  const temp = items[j];
  items[j] = items[i];
  items[i] = temp;
};

var smallestK = function (arr, k) {
  buildHeap(arr, arr.length);
  const sortArr = sort(arr);
  console.log("--arr--", sortArr);
};

smallestK(arr);
