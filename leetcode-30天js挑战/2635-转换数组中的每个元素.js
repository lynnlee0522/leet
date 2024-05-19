/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const fn = function plusI(n, i) {
  return n + i;
};
const arr = [1, 2, 3];

var map = function (arr, fn) {
  const newArr = arr;

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(newArr[i], i);
  }

  return newArr;
};

console.log(map(arr, fn));
