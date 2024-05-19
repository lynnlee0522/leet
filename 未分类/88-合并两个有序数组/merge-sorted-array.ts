/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(A: number[], m: number, B: number[], n: number): void {
  const tmpArr = [];

  for (let k = 0, i = 0, j = 0; k < m + n; k++) {
    if (i < m && A[i] < B[j]) {
      tmpArr.push(A[i]);
      i++;
    } else {
      tmpArr.push(B[j]);
      j++;
    }
  }

  A = tmpArr;
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
