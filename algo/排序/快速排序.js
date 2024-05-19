const quickSort = (arr) => {
  const length = arr.length;
  if (length < 2) {
    return arr;
  }

  // 获取基准线值
  const mid = Math.floor(length / 2);
  const valArr = arr.splice(mid, 1);
  const midValue = valArr[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(midValue, quickSort(right));
};

console.log(quickSort([1, 2, 3, 4, 5, 3]));
