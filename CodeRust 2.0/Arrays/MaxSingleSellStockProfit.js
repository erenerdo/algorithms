/*

Find maximum single sell profit
Given a list of stock prices for n days, find the maximum profit with a single buy/sell activity.

*/

function maxProfit(prices) {
  let profit = 0;
  let currentMin = prices[0];

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - currentMin);
    currentMin = Math.min(currentMin, prices[i]);
  }

  return profit;
}
