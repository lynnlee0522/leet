function minimumTotal(triangle: number[][]): number {
  const length = triangle.length;

  if (length === 1) {
    return triangle[0][0];
  }

  const dp = Array.from(new Array(length).fill(0), () => {
    return new Array(triangle[length - 1].length);
  });

  dp[0][0] = triangle[0][0];
  let ans = Infinity;

  for (let i = 1; i < length; i++) {
    const len = triangle[i].length;

    for (let j = 0; j < len; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === len - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
      }

      if (i === length - 1) {
        ans = Math.min(ans, dp[i][j]);
      }
    }
  }

  return ans;
}

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
