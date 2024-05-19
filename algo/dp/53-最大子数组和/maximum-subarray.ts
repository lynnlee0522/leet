function maxSubArray(nums: number[]): number {
  let maxAns = nums[0];
  let pre = 0;
  for (var i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    maxAns = Math.max(maxAns, pre);
  }
  return maxAns;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
