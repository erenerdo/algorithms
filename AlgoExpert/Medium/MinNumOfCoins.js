/*

Min Number Of Coins For Change

Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the smallest number of coins needed to make change for that target amount using the given coin denominations. Note that an unlimited amount of coins is at your disposal. If it is impossible to make change for the target amount, return -1.

Sample input: 7, [1, 5, 10]
Sample output: 3 (2x1 + 1x5)

*/

function minNumberOfCoinsForChange(n, denoms) {

  const minCoins = new Array(n + 1).fill(Infinity);

  // Initialize minCoins array
  minCoins[0] = 0;

  for (let i = 0; i < denoms.length; i++) {
    const coin = denoms[i];

    for (let val = 0; val < minCoins.length; val++) {
      if (val >= coin) {
        minCoins[val] = Math.min(minCoins[val - coin] + 1, minCoins[val]);
      }
    }
  }
  if (minCoins[n] !== Infinity) return minCoins[n];
  return -1;
}
