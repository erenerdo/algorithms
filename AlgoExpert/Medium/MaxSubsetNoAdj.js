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

	if (array.length <= 2) {
		return Math.max(array[0], array[1]);
	}

	const sums = new Array(array.length).fill(0);

	sums[0] = array[0];
	sums[1] = array[1];
	sums[2] = array[2] + array[0];

	for (let i = 3; i < sums.length; i++) {
		const prevMax = Math.max(sums[i - 2], sums[i - 3]);
		sums[i] = prevMax + array[i];
	}

	return Math.max(sums[sums.length - 1], sums[sums.length - 2]);
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
