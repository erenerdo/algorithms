/*
Palindrome Check

Write a function that takes in a non-empty string and that returns a boolean representing whether or not the string is a palindrome. A palindrome is defined as a string that is written the same forward and backward.


Sample input: "abcdcba"
Sample output: True

*/

function isPalindrome(string) {

	let i = 0;
	let j = string.length - 1;

	while (i < j) {
		if (string[i] !== string[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
