function maxProfit(prices: number[]): number {
  const length = prices.length;
  const dp = Array.from(new Array(length), () => new Array(2));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[length - 1][0];
}
