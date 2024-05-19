/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] && right !== left) {
      swap(nums, left, right);
      left++;
    }

    right++;
  }
};

const swap = (nums, left, right) => {
  const tmp = nums[left];
  nums[left] = nums[right];
  nums[right] = tmp;
};
