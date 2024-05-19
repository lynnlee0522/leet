// 空间复杂度 O(n)
// 时间复杂度 O(nlogn)
const mergeSort = (array) => {
  const length = array.length;
  if (length < 2) {
    return array;
  }

  let mid = Math.floor(length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

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

console.log(mergeSort([1, 2, 3, 4, 5, 3]));
