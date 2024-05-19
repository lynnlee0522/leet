// 复习下归并排序

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

var threeSumClosest = function (nums, target) {
  const arr = mergeSort(nums);
  let min = Infinity;
  let res;
  for (let i = 0; i < arr.length - 2; i++) {
    let basic = arr[i];
    let low = i + 1;
    let high = arr.length - 1;

    while (low < high) {
      const result = basic + arr[low] + arr[high];
      const gap = Math.abs(result - target);
      if (gap < min) {
        min = gap;
        res = result;
      }
      if (result < target) {
        low++;
      } else {
        high--;
      }
    }
  }

  return res;
};

const arr = [-1, 2, 1, -4];

console.log(threeSumClosest(arr, 1));
