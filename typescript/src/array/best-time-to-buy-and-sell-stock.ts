function maxProfit(prices: number[]): number {
  let buy: number = Number.MAX_SAFE_INTEGER;
  let profit: number = 0;

  prices.forEach(price => {
    buy = Math.min(buy, price);
    profit = Math.max(profit, price - buy)
  });

  return profit;
};