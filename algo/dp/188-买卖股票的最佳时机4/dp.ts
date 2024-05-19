function maxProfit(k: number, prices: number[]): number {
  const len = prices.length;

  const dp = Array.from(new Array(len), () => {
    return new Array(k + 1);
  });

  dp[0][0] = {
    buy: -prices[0],
    sell: 0,
  };

  for (let i = 1; i < len; i++) {
    dp[i][0] = {
      buy: Math.max(dp[i - 1][0].buy, dp[i - 1][0].sell - prices[i]),
      sell: 0,
    };
  }

  for (let i = 1; i <= k; ++i) {
    dp[0][i] = {
      buy: -Infinity,
      sell: -Infinity,
    };
  }

  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j] = {
        buy: Math.max(dp[i - 1][j].buy, dp[i - 1][j].sell - prices[i]),
        sell: Math.max(dp[i - 1][j].sell, dp[i - 1][j - 1].buy + prices[i]),
      };
    }
  }

  return dp[len - 1][2];
}

maxProfit(2, [3, 2, 6, 5, 0, 3]);
