const nums = [2, 7, 11, 15];
const target = 9;

// 温习下快排
// 快排的核心思想是把大数组，分成小数组，在小数组上解决问题
// 根据flag,分成左右两个数组，
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  // 找到目标值，把目标值从数组中删除
  const mid = Math.floor(arr.length / 2);
  const targetValue = arr.splice(mid, 1);

  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < targetValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(targetValue, quickSort(right));
};


const twoSum = (array, target) => {
  const arr = quickSort(array);

  let low = 0;
  let high = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const result = arr[low] + arr[high];
    if (result === target) {
      return [array.indexOf(arr[low]), array.indexOf(arr[high])];
    }

    if (result > target && low < high) {
      high--;
    } else {
      low++;
    }
  }
};

twoSum([3, 3], 6);
