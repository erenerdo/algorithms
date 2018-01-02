/*
Shifted Binary Search

Write a function that takes in a sorted array of integers as well as a target integer. The caveat is that the numbers in the array have been shifted by some amount; in other words, they have been moved to the left or the right by one or more positions. For example, [1, 2, 3, 4] might become [3, 4, 1, 2]. The function should use a variation of the Binary Search algorithm to find if the target number is contained in the array and should return its index if it is, otherwise -1.

Sample input: [45, 61, 71, 72, 73, 0, 1, 21, 33, 45], 33
Sample output: 8
*/

function shiftedBinarySearch(arr, target) {
	let lo = 0;
	let hi = arr.length - 1;
	let mid;

	while (lo <= hi) {
		mid = lo + Math.floor((hi - lo)/2);
		if (arr[mid] < arr[hi]) hi = mid;
		else lo = mid + 1;
	}

	// Mid at lowest value
	// Reset low and hi
  lo = 0;
  hi = arr.length - 1;

	// Find partition of array to binary search
	if (target >= arr[lo]) hi = mid - 1;
	else lo = mid;

	while (lo <= hi) {
		let mid = lo + Math.floor((hi - lo)/2);
		if (target > arr[mid]) lo = mid + 1;
		else if (target < arr[mid]) hi = mid - 1;
		else return mid;
	}

	return -1;
}

// Do not edit the line below.
exports.shiftedBinarySearch = shiftedBinarySearch;
