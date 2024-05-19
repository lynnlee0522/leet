/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (array1, array2) {
  const result = [];

  const arr1 = array1.sort(a, (b) => a.id - b.id);
  const arr2 = array2.sort(a, (b) => a.id - b.id);

  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].id < arr2[j].id) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i].id === arr2[j].id) {
      result.push({
        ...arr1[i++],
        ...arr2[j++],
      });
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i !== arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j !== arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  console.log("--result--", result);

  return result;
};

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

join(arr1, arr2);
