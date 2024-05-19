// 时间复杂度 O(n * 2)
// 空间复杂度 O(1)
// 稳定的排序 不稳定

const selectSort = (arr) => {
  console.time("选择排序");
  const len = arr.length;
  let minIndex, temp;

  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  console.timeEnd("选择排序");
};

selectSort([1, 2, 3, 4, 5, 3]);