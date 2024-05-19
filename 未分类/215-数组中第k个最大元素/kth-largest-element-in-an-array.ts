const findKthLargest = (arr: Array<number>, k: number) => {
  return quickSelect(arr, 0, arr.length - 1, arr.length - k);
};

const quickSelect = (
  arr: Array<number>,
  begin: number,
  end: number,
  index: number
) => {
  const q = randomPartition(arr, begin, end);

  if (q === index) {
    return arr[q];
  } else {
    return q < index
      ? quickSelect(arr, q + 1, end, index)
      : quickSelect(arr, begin, q - 1, index);
  }
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
