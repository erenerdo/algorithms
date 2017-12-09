
/*
Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
Sample output: [-1, 11]

*/

function twoNumberSum(array, targetSum) {

	let hSet = new Set();

	for (let i = 0; i < array.length; i++) {
		let num = array[i];

		if (hSet.has(targetSum - num)) {
			let arr = [num, targetSum - num];
			return arr.sort(function (a, b) {return a - b});
    }
    else {
			hSet.add(num);
		}
	}
	return [];
}
