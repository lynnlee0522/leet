/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let target = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== target) {
      target = nums[i];
      count = 0;
    } else {
      count++;
      if (count > 2) {
        nums[i] = false;
      }
    }
  }
  let i = 0,
    j = 0;
  while (i < nums.length) {
    while (nums[j] === nums[i] || nums[j] === false) {
      j++;
    }
    if (nums[i] === false) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    } else {
      i++;
    }
  }
  return i + 1;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
