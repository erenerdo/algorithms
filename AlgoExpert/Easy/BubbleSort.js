/*

Bubble Sort

Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.


Sample input: [8, 5, 2, 9, 5, 6, 3]
Sample output: [2, 3, 5, 5, 6, 8, 9]

*/

function bubbleSort(array) {
	// isSwap used to break when array already sorted
	let isSwap = false;

	for (let i = array.length - 1; i >= 0; i--) {
		for (let j = 0; j <= i - 1; j++) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
				isSwap = true;
			}
		}
		if (!isSwap) break;
		isSwap = false;
	}
	return array;
}

function swap (array, idx1, idx2) {
	let temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

