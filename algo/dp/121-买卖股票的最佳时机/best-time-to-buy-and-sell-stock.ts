function maxProfit(prices: number[]): number {
  let minPrice = prices[0];

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}
