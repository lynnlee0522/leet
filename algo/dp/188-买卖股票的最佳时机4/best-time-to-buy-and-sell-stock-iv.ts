function maxProfit(k: number, prices: number[]): number {
  let len = prices.length;
  let profit = new Array(k);

  for (let i = 0; i <= k; i++) {
    profit[i] = {
      buy: -prices[0],
      sell: 0,
    };
  }

  for (let i = 0; i < len; i++) {
    for (let j = 1; j <= k; j++) {
      profit[j] = {
        sell: Math.max(profit[j].sell, profit[j].buy + prices[i]),
        buy: Math.max(profit[j].buy, profit[j - 1].sell - prices[i]),
      };
    }
  }

  return profit[k].sell;
}

maxProfit(2, [3, 2, 6, 5, 0, 3]);
