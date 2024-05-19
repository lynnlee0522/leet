const insertSort = (arr) => {
  const length = arr.length;
  if (length === 1) {
    return arr;
  }

  let low, high, mid;

  for (let i = 1; i < length; i++) {
    let current = arr[i];
    low = 0;
    high = i - 1;

    while (low <= high) {
      mid = (low + high) >> 1;
      if (arr[mid] <= current) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    for (let j = i; j > low; j--) {
      arr[j] = arr[j - 1];
    }

    arr[low] = current;
  }

  console.log("--arr---", arr);
};

insertSort([1, 2, 3, 4, 5, 3]);
insertSort([1, 3, 4, 3]);
