/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((num) => {
    if (map.get(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  const sortMap = Array.from(map).sort((a, b) => {
    return b[1] - a[1];
  });

  return sortMap.slice(0, k).map((item) => item[0]);
};

console.log(topKFrequent([3, 0, 1, 0], 1));
