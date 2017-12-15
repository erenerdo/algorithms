/*

Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a 2D array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]


*/
function threeNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	const combinations = [];

	for (let i = 0; i < array.length; i++) {
		let lo = i + 1;
		let hi = array.length - 1;

		while (lo < hi) {
			const val = array[i] + array[lo] + array[hi];

			if (val < targetSum) lo++;
			else if (val > targetSum) hi--;
			else {
				combinations.push([array[i], array[lo], array[hi]])
				lo++;
				hi--;
			}
		}
	}
	return combinations;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
