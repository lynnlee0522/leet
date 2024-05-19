function uniquePaths(m: number, n: number): number {
  let dp: Array<Array<number>> = Array.from(new Array(m), () => new Array(n));

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let j = 0; j < m; j++) {
    dp[j][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

uniquePaths(3, 2);
