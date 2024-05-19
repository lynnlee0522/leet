const arr = [47, 29, 71, 99, 78, 19, 24, 47];

const quickSort = (arr: Array<number>, begin: number, end: number) => {
  if (begin >= end) {
    return;
  }

  // 这里是支点的位置。
  const pivotIdx = randomPartition(arr, begin, end);

  console.log("----arr---", arr);

  quickSort(arr, begin, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);
};

const randomPartition = (
  arr: Array<number>,
  begin: number,
  end: number
): number => {
  const r = Math.ceil(Math.random() * (end - begin) + begin);
  swap(arr, begin, r);
  return partition(arr, begin, end);
};

const swap = (arr: Array<number>, i: number, j: number) => {
  const tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;
};

const partition = (arr: Array<number>, begin: number, end: number) => {
  const pivotNum = arr[begin];
  let i = begin;
  let j = end;

  while (i < j) {
    while (i < j && arr[j] >= pivotNum) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
      i++;
    }

    while (i < j && arr[i] <= pivotNum) {
      i++;
    }

    if (i < j) {
      swap(arr, i, j);
      j--;
    }
  }

  return i;
};

quickSort(arr, 0, arr.length - 1);
console.log("---arr---", arr);
