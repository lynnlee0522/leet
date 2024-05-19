// 时间复杂度 O(n^2）
// 空间复杂度 O(1)
// 稳定的算法排序

const bubbleSort = (arr) => {
  console.time("冒泡排序");

  const length = arr.length;

  if (length < 1) return;

  // 自己不用和自己比
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log("--冒泡完成--", arr);
  console.timeEnd("冒泡排序");
};

const arr = [3, 5, 13, 4];
bubbleSort(arr);

const bubbleSort2 = (arr) => {
  console.time("冒泡排序");
  const length = arr.length;
  if (length < 1) return;

  // 自己不用和自己比
  for (let i = 0; i < length - 1; i++) {
    let flag = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!flag) {
      break;
    }
  }

  console.log("--冒泡完成--", arr);
  console.timeEnd("冒泡排序");
};

const arr2 = [3, 5, 13, 4];
bubbleSort2(arr2);
