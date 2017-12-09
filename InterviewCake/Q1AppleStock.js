/*
Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/

var stockPricesYesterday1 = [10, 7, 5, 8, 11, 9]; // 6
var stockPricesYesterday2 = [18, 14, 10, 7, 5, 1]; // -2
var stockPricesYesterday3 = [1, 5, 6, 16, 2, 9, 15]; // 15
var stockPricesYesterday4 = [55, 52, 45, 40, 39, 31, 14]; // -1
var stockPricesYesterday5 = [22, 17, 5, 12, 8, 19, 14, 24]; // 19
var stockPricesYesterday6 = [4, 17, 5, 16, 20]; // 16


function getMaxProfit(stockPrices) {

  // Check if enough stock prices
  if (stockPrices.length < 2) {
    throw new Error('Not enough valid stock prices');
  }

  // Initialize Max Profit and Current Min
  var maxProfit = stockPrices[1] - stockPrices[0];
  var currentMin = stockPrices[0];

  for (var i = 1; i < stockPrices.length; i++) {
    // Stock current price for simplicity
    var currentPrice = stockPrices[i];

    // Check and see if current sell price would yield a max profit
    maxProfit = Math.max(currentPrice - currentMin, maxProfit);

    // Check if current price can be a new minimum
    currentMin = Math.min(currentMin, currentPrice);
  }
  return maxProfit;
}

console.log('Stocks Prices:', stockPricesYesterday1, ', Max Profit:', getMaxProfit(stockPricesYesterday1));
console.log('Stocks Prices:', stockPricesYesterday2, ', Max Profit:', getMaxProfit(stockPricesYesterday2));
console.log('Stocks Prices:', stockPricesYesterday3, ', Max Profit:', getMaxProfit(stockPricesYesterday3));
console.log('Stocks Prices:', stockPricesYesterday4, ', Max Profit:', getMaxProfit(stockPricesYesterday4));
console.log('Stocks Prices:', stockPricesYesterday5, ', Max Profit:', getMaxProfit(stockPricesYesterday5));
console.log('Stocks Prices:', stockPricesYesterday6, ', Max Profit:', getMaxProfit(stockPricesYesterday6));

