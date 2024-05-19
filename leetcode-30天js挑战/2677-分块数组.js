/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const result = [];

  let i = 0;
  const chunk = [];
  while (i < arr.length) {
    chunk.push(arr[i]);
    if (chunk.length === size || i === arr.length - 1) {
      result.push([...chunk]);
      chunk = [];
    }
    i++;
  }

  return result;
};
