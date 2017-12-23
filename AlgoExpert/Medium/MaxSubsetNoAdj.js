/*
Maximum Subset Sum With No Adjacent Elements

Write a function that takes in an array of positive integers and returns an integer representing the maximum sum of non-adjacent elements in the array. If a sum cannot be generated, the function should return 0.

Sample input: [75, 105, 120, 75, 90, 135]
Sample output: 330 (75, 120, 135)
*/

function maxSubsetSumNoAdjacent(array) {

	// Edge Cases
	if (array.length === 0) return 0;

	if (array.length === 1) return array[0];

	if (array.length === 2) {
		return Math.max(array[0], array[1]);
	}

	let third = array[0];
	let second = array[1];
	let first = array[2] + array[0];

	for (let i = 3; i < array.length; i++) {
		const newMax = Math.max(second, third) + array[i];

		third = second;
		second = first;
		first = newMax;
	}

	return Math.max(first, second);
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
