function uniquePaths(m: number, n: number): number {
  let ans = 1;

  for (let i = n, j = 1; j < m; i++, j++) {
    ans = (ans * i) / j;
  }

  return ans;
}
