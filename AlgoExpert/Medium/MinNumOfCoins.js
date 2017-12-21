/*

Min Number Of Coins For Change

Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the smallest number of coins needed to make change for that target amount using the given coin denominations. Note that an unlimited amount of coins is at your disposal. If it is impossible to make change for the target amount, return -1.

Sample input: 7, [1, 5, 10]
Sample output: 3 (2x1 + 1x5)

*/

function minNumberOfCoinsForChange(n, denoms) {
  let coinCount = 0;
	let currentCoinIdx = denoms.length - 1;

	while (currentCoinIdx >= 0 && n > 0){
		if (denoms[currentCoinIdx] <= n) {
			n -= denoms[currentCoinIdx];
			coinCount++;
		} else {
			currentCoinIdx--;
		}
	}
	if (n === 0) return coinCount;
	return -1;
}
