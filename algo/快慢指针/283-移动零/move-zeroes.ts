/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const length = nums.length;

  let left = 0,
    right = 0;

  while (right < length) {
    if (nums[right]) {
      swap(nums, left, right);
      left++;
    }

    right++;
  }
}

const swap = (nums: number[], left: number, right: number) => {
  const tmp = nums[left];
  nums[left] = nums[right];
  nums[right] = tmp;
};
