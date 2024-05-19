const quickSort = (arr: Array<number>, begin: number, end: number) => {
  if (begin >= end) {
    return;
  }

  // 找到支点位置
  const pivotIdx = randomPartition(arr, begin, end);
  quickSort(arr, begin, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);
};

const randomPartition = (arr: Array<number>, begin: number, end: number) => {
  // 通过随机数找到一个位置
  const randomIdx = Math.ceil(Math.random() * (end - begin)) + begin;

  // 与第一个数交换
  swap(arr, begin, randomIdx);

  // 分治法
  return partition(arr, begin, end);
};

const partition = (arr: Array<number>, begin: number, end: number) => {
  const pivot = arr[begin];
  let i = begin;
  let j = end;

  while (i < j) {
    while (i < j && arr[j] >= pivot) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }

    while (i < j && arr[i] <= pivot) {
      i++;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }

  return i;
};

// 交换函数
const swap = (arr: Array<number>, num1: number, num2: number) => {
  const tmp = arr[num2];
  arr[num2] = arr[num1];
  arr[num1] = tmp;
};

function threeSum(nums: number[]): number[][] {
  let ans = [];
  // 先排序
  quickSort(nums, 0, nums.length - 1);

  // 第一层循环 固定first
  for (let first = 0; first <= nums.length - 3; first++) {
    // 优化: 需要和上一次的值不同
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }

    const target = -nums[first];
    let third = nums.length - 1;
    // 第二层循环，固定second
    for (let second = first + 1; second <= nums.length - 2; second++) {
      // 优化: 需要和上一次的值不同 (肯定不是第一个值)
      if (second > first + 1 && nums[first] === nums[first - 1]) {
        continue;
      }

      while (second < third && nums[second] + nums[third] > target) {
        third--;
      }

      if (second == third) {
        break;
      }

      if (nums[second] + nums[third] === target) {
        const targetArr = [nums[first], nums[second], nums[third]];
        ans.push(targetArr);
      }
    }
  }

  return ans;
}

console.log(threeSum([0, 0, 0, 0]));
