function maxProfit(prices: number[]): number {
  const len = prices.length;

  let sell1 = 0;
  let sell2 = 0;
  let buy1 = -prices[0];
  let buy2 = -prices[0];

  for (let i = 0; i < len; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return sell2;
}
