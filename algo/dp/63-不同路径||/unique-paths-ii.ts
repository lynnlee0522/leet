function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  const m = obstacleGrid[0].length;
  const n = obstacleGrid.length;

  const dp = Array.from(new Array(n).fill(0), () => {
    return new Array(obstacleGrid[0].length).fill(0);
  });

  dp[0][0] = 1;

  for (let i = 1; i < m; i++) {
    if (obstacleGrid[0][i] !== 1) {
      dp[0][i] = 1;
    } else {
      break;
    }
  }

  for (let j = 1; j < n; j++) {
    if (obstacleGrid[j][0] !== 1) {
      dp[j][0] = 1;
    } else {
      break;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[n - 1][m - 1];
}

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
