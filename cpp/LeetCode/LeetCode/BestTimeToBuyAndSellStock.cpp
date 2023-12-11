#include<vector>
#include<math.h>

using namespace std;

class BestTimeToBuyAndSellStock {
public:
    int maxProfit(vector<int>& prices) {
        int buy = INT_MAX;
        int profit = 0;

        for (int price : prices) {
            buy = min(buy, price);
            profit = max(profit, price - buy);
        }

        return profit;
    }
};