/*

Binary Search

Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to find if the target number is contained in the array and should return its index if it is, otherwise -1.

Sample input: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33
Sample output: 3

*/

function binarySearch(array, target) {
	// Initialize lo and hi variables
	let lo = 0;
	let hi = array.length - 1;

	while (lo <= hi) {
		let mid = lo + Math.floor((hi - lo)/2);

		if (target === array[mid])
			return mid;
		else if (target > array[mid])
			lo = mid + 1;
		else
			hi = mid - 1;
	}
	// While loops terminates when failure so return -1
	return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
