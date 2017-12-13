/*

Levenshtein Distance

Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string. There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.

Sample input: "abc", "yabd"
Sample output: 2 (insert "y"; substitute "c" for "d")

*/

function levenshteinDistance(str1, str2) {
	// Create first array (top Array)
	let topArr = new Array(str2.length + 1).fill(0);
	for (let i = 0; i < topArr.length; i++) {
		topArr[i] = i;
	}
	// Create second array to be used (lower array)
	let lowArr = new Array(str2.length + 1).fill(0);

	// Create temp pointer to be used when swapping arrays
	let tempArr;

	for (let row = 1; row <= str1.length; row++) {
		lowArr[0] = row;

		for (let col = 1; col <= str2.length; col++) {

			// Check if characters are the same
			if (str2[col - 1] === str1[row - 1]) {
				// Get the value from the top array
				lowArr[col] = topArr[col - 1];
			}
			else {
				// Not equal, assign it the min
				lowArr[col] = 1 + Math.min(
					lowArr[col - 1],
					topArr[col],
					topArr[col - 1]);
			}
		}

		// Swap arrays since we are essentiall sliding down the row and
		// the previous top array is now useless
		tempArr = topArr;
		topArr = lowArr;
		lowArr = tempArr;
	}

	// Return the right most element which represents the solution
	return topArr[topArr.length - 1];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
