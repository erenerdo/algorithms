/*

Number Of Ways To Make Change

Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the number of ways to make change for that target amount using the given coin denominations. Note that an unlimited amount of coins is at your disposal.

Sample input: 6, [1, 5]
Sample output: 2 (1x1 + 1x5 and 6x1)

*/

function numberOfWaysToMakeChange(num, denoms) {

	// Initialize a new empty array the size of n
	let combinations = new Array(num + 1).fill(0);

	// Set the 0th element of the array to 1 to initialize it
	combinations[0] = 1;

	// Iterate through the array
	for (let coinIdx = 0; coinIdx < denoms.length; coinIdx++) {
		// Get current coin from our denominations array
		let currentCoin = denoms[coinIdx];

		// Iterate through combinatins array
		for (let amount = 0; amount < combinations.length; amount++){

			// If the current amount (index) is greater than our
			// current coin then we can make a new combination from this
			if (amount >= currentCoin) {
				combinations[amount] += combinations[amount - currentCoin];
			}
		}
	}
	return combinations[num];
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
