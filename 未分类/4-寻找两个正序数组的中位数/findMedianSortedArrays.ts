function findMedianSortedArrays(A: number[], B: number[]): number {
  const lenA = A.length;
  const lenB = B.length;
  const totalLen = lenA + lenB;

  if (totalLen % 2 === 1) {
    const midIndex = Math.floor(totalLen / 2);
    const median = getKthElement(A, B, midIndex + 1);
    return median;
  } else {
    const leftMidIndex = Math.floor(totalLen / 2);

    const median =
      (getKthElement(A, B, leftMidIndex) +
        getKthElement(A, B, leftMidIndex + 1)) /
      2;

    return median;
  }
}

const getKthElement = (A: number[], B: number[], K: number): number => {
  /* 主要思路：要找到第 k (k>1) 小的元素，那么就取 pivot1 = nums1[k/2-1] 和 pivot2 = nums2[k/2-1] 进行比较
   * 这里的 "/" 表示整除
   * nums1 中小于等于 pivot1 的元素有 nums1[0 .. k/2-2] 共计 k/2-1 个
   * nums2 中小于等于 pivot2 的元素有 nums2[0 .. k/2-2] 共计 k/2-1 个
   * 取 pivot = min(pivot1, pivot2)，两个数组中小于等于 pivot 的元素共计不会超过 (k/2-1) + (k/2-1) <= k-2 个
   * 这样 pivot 本身最大也只能是第 k-1 小的元素
   * 如果 pivot = pivot1，那么 nums1[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums1 数组
   * 如果 pivot = pivot2，那么 nums2[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums2 数组
   * 由于我们 "删除" 了一些元素（这些元素都比第 k 小的元素要小），因此需要修改 k 的值，减去删除的数的个数
   */

  const lenA = A.length;
  const lenB = B.length;

  let indexA = 0,
    indexB = 0;

  let kthElement = K;

  while (true) {
    // 边界情况
    if (indexA == lenA) {
      return B[indexB + kthElement - 1];
    }
    if (indexB == lenB) {
      return A[indexA + kthElement - 1];
    }
    if (kthElement == 1) {
      return Math.min(A[indexA], B[indexB]);
    }

    // 正常情况
    const half = Math.floor(kthElement / 2);

    let newIndexA = Math.min(indexA + half, lenA) - 1;
    let newIndexB = Math.min(indexB + half, lenB) - 1;

    let pivot1 = A[newIndexA],
      pivot2 = B[newIndexB];

    if (pivot1 <= pivot2) {
      kthElement -= Math.floor(kthElement / 2);
      indexA = newIndexA + 1;
    } else {
      kthElement -= Math.floor(kthElement / 2);
      indexB = newIndexB + 1;
    }
  }
};

findMedianSortedArrays([1, 3, 4, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
