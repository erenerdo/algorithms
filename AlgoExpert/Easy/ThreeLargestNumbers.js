/*

Find Three Largest Numbers

Write a function that takes in an array of integers and returns a sorted array of the three largest integers in the input array. Note that the function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].


Sample input: [141, 1, 17, -7, -27, 18, 541, 8, 7, 7]
Sample output: [18, 141, 541]

*/
function findThreeLargestNumbers(array) {

	let first = Number.MIN_SAFE_INTEGER;
	let second = Number.MIN_SAFE_INTEGER;
	let third = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < array.length; i++) {
		const num = array[i];
		if (num > first) {
			third = second;
			second = first;
			first = num;
		}
		else if (num > second) {
			third = second;
			second = num;
		}
		else if (num > third) {
			third = num;
		}
	}

	return [third, second, first];
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
