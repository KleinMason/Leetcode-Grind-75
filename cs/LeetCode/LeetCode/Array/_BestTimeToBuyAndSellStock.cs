namespace LeetCode.Array
{
    internal class _BestTimeToBuyAndSellStock
    {
        public int MaxProfit(int[] prices)
        {
            int profit = 0;
            int buy = int.MaxValue;

            foreach (int price in prices)
            {
                buy = Math.Min(buy, price);
                profit = Math.Max(profit, price - buy);
            }

            return profit;
        }
    }
}
