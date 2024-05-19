function maxProfit(prices: number[]): number {
    let benifit = 0;
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        benifit += prices[i] - prices[i - 1];
      }
    }
  
    return benifit;
  }
  