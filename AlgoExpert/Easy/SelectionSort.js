/*

Selection Sort

Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.

Sample input: [8, 5, 2, 9, 5, 6, 3]
Sample output: [2, 3, 5, 5, 6, 8, 9]

*/

function selectionSort(array) {
	// Iterate through the array each time finding the smallest item.
	// Swap that item with the correct position being kept
	// track of with another pointer.

	for (let i = 0; i < array.length; i++) {
		// Initialize current min
		let currentMinIdx = i;

		// Iterate through remaing array to find least element
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[currentMinIdx]) {
				currentMinIdx = j;
			}
		}
		// Swap min index with current i
		swap(array, i, currentMinIdx);
	}
	return array;
}

function swap (array, idx1, idx2) {
	let temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
