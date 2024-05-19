/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(A: number[], m: number, B: number[], n: number): void {
  for (let k = m + n - 1, i = m - 1, j = n - 1; k >= 0; k--) {
    if (j < 0 || (i >= 0 && A[i] > B[j])) {
      A[k] = A[i];
      i--;
    } else {
      A[k] = B[j];
      j--;
    }
  }
}
