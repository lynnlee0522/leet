function addStrings(A: string, B: string): string {
  const ansArr = [];

  let i = A.length - 1;
  let j = B.length - 1;

  let add = 0;

  while (i >= 0 || j >= 0 || add !== 0) {
    const x = i >= 0 ? Number(A[i]) : 0;
    const y = j >= 0 ? Number(B[j]) : 0;

    const result = x + y + add;
    add = Math.floor(result / 10);
    ansArr.unshift(result % 10);

    j--;
    i--;
  }

  return ansArr.join('');
}
