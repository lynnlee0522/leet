/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  // j始终是最后一个不等于val的位置
  let j = nums.length - 1;

  if (!nums.length) return 0;

  while (nums[j] === val) {
    j--;
  }

  while (j >= i) {
    if (j > 0 && nums[i] === val) {
      // 等于则交换
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    } else {
      i++;
    }

    while (nums[j] === val) {
      j--;
    }
  }
  nums.length = j + 1;
  return j + 1;
};

removeElement([4, 1, 2, 4, 4, 0, 0], 4);
