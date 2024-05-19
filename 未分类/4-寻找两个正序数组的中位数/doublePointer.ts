function findMedianSortedArrays(A: number[], B: number[]): number {
  const m = A.length;
  const n = B.length;
  const len = Math.floor((m + n) / 2);

  let AStart = 0,
    BStart = 0;
  let left = -Infinity,
    right = -Infinity;

  for (let i = 0; i <= len; i++) {
    left = right;

    if (AStart < m && (A[AStart] < B[BStart] || BStart >= n)) {
      right = A[AStart++];
    } else {
      right = B[BStart++];
    }
  }

  if ((m + n) % 2 == 1) {
    return right;
  } else {
    return (left + right) / 2;
  }
}


// 时间复杂度是O(m + n)
// 空间复杂度是O(1)