/*

Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a 2D array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]


*/

function threeNumberSum(array, targetSum) {
	array.sort((a,b) => a-b);
	const combs = [];
	const hMap = new Map();

	// Add all values to hMap
	for (let k = 0; k < array.length; k++) {
		hMap.set(array[k],k);
	}

	// Iterate through array again, checking if a three sum exists
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			const goal = targetSum - array[i] - array[j];

			if (hMap.has(goal)) {
				if (hMap.get(goal) !== i && hMap.get(goal) !== j) {
					const sol = [array[i], array[j], goal];
					let shouldAdd = true;
					combs.forEach(comb => {
					  if (comb.includes(array[i]) &&
								comb.includes(array[j]) &&
								comb.includes(goal)) {
					    shouldAdd = false;
					  }
					});
					if (shouldAdd) combs.push(sol);
					continue;
				}
			}
		}
	}

	return combs;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
