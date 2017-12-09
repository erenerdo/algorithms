/*

Insertion Sort

Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

Sample input: [8, 5, 2, 9, 5, 6, 3]
Sample output: [2, 3, 5, 5, 6, 8, 9]

*/

function insertionSort(array) {
	for (let i = 1; i < array.length; i++){
		let j = i;
		while (array[j] < array[j - 1] && j >= 1) {
			swap(array, j, j - 1);
			j--;
		}
	}
	return array;
}

// Helper swap function
function swap (array, idx1, idx2) {
	let temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}


// Do not edit the line below.
exports.insertionSort = insertionSort;

//	Steps of Insertion Sort
// ========================
//
// 8: 5 2 9 5 6 3
// 5 8: 2 9 5 6 3
// 2 5 8: 9 5 6 3
// 2 5 8 9: 5 6 3
// 2 5 5 8 9: 6 3
// 2 5 5 6 8 9: 3
// 2 3 5 5 6 8 9:
