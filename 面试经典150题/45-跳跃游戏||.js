/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0;
  let end = 0;
  let maxPos = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, i + nums[i]);
    if (i === end) {
      end = maxPos;
      count++;
    }
  }
  return count;
};

jump([3, 2, 1]);
