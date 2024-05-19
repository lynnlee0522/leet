/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let index = nums1.length - 1;
  while (i >= 0 && j >= 0) {
    // 大的先走
    if (nums1[i] >= nums2[j]) {
      nums1[index] = nums1[i];
      index--;
      i--;
    } else {
      nums1[index] = nums2[j];
      index--;
      j--;
    }
  }

  // 如果j走完了，什么都不用动
  // 如果j没走完
  while (j >= 0) {
    nums1[index] = nums2[j];
    j--;
    index--;
  }

  return nums1;
};

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
