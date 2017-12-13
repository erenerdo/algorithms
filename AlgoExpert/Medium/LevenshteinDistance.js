/*

Levenshtein Distance

Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string. There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.

Sample input: "abc", "yabd"
Sample output: 2 (insert "y"; substitute "c" for "d")

*/

function levenshteinDistance(str1, str2) {
	let levArr = new Array(str2.length + 1).fill(0);
	levArr = levArr.map(ele => new Array(str1.length + 1).fill(0));


	for (let i = 0; i <= str2.length; i++) {
		levArr[i][0] = i;
	}

	for (let j = 0; j <= str1.length; j++) {
		levArr[0][j] = j;
	}

	for (let row = 1; row <= str1.length; row++) {

		for (let col = 1; col <= str2.length; col++) {

			if (str2[col - 1] === str1[row - 1]) {
				levArr[col][row] = levArr[col - 1][row - 1];
			}
			else {
				levArr[col][row] = 1 + Math.min(
					levArr[col - 1][row],
					levArr[col - 1][row - 1],
					levArr[col][row - 1]
				);
			}
		}
	}
	return levArr[str2.length][str1.length];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;


// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
