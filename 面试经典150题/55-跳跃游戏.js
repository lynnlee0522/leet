/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let longest = 0;

  if (nums.length <= 1) {
    return true;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (i <= longest) {
      longest = Math.max(longest, i + nums[i]);
      if (longest >= nums.length - 1) {
        return true;
      }
    }
  }

  return false;
};

canJump([1, 0, 1, 0]);
