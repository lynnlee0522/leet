// 时间复杂度 O(n * 2)
// 空间复杂度 O(1)
// 稳定的排序 稳定

const insertSort = (arr) => {
  const length = arr.length;
  let current, preIndex;

  for (let i = 1; i < length; i++) {
    current = arr[i];
    preIndex = i - 1;

    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex - 1] = arr[preIndex];
      preIndex--;
    }

    if (preIndex + 1 !== i) {
      arr[preIndex + 1] = current;
    }
  }
};

// insertSort([5, 4, 3, 2, 1]);

const insertSort2 = (arr) => {
  const length = arr.length;

  let low, high, m, current;

  for (let i = 1; i < length; i++) {
    low = 0;
    high = i - 1;
    current = arr[i];

    while (low <= high) {
      m = (low + high) >> 1;
      if (current >= arr[m]) {
        low = m + 1;
      } else {
        high = m - 1;
      }
    }

    for (j = i; j > low; j--) {
      arr[j] = arr[j - 1];
    }

    arr[low] = current;
  }

  console.log('--arr---', arr);
};

// insertSort2([1, 2, 3, 4, 5, 3]);
insertSort2([1,3,4,3]);;
