/*

Longest Palindromic Substring

Write a function that, given a string, returns its longest palindromic substring. A palindrome is defined as a string that is written the same forward and backward. Assume that there will only be one longest palindromic substring.

Sample input: "abaxyzzyxf"
Sample output: "xyzzyx"

*/
function longestPalindromicSubstring(string) {
  let longestPalSS = '';

	// Treat each i as the center of a possible palindrome
  for (let i = 0; i < string.length; i++) {
    let left = i;
    let right = i + 1;

    // Check for even palindromes
    while (left >= 0 && right < string.length) {

      if (string[left] !== string[right]) break;

      let evenSS = string.substring(left, right + 1);

			// Check if current substring palindrome is greater than the longest one
      if (evenSS.length > longestPalSS.length) {
          longestPalSS = evenSS;
      }
      left--;
      right++;
    }

    // Check for odd palindromes, reset values
    left = i;
    right = i;


    while (left >= 0 && right < string.length) {
			// Check if values are equal
      if (string[left] !== string[right]) break;

      let oddSS = string.substring(left, right + 1);

      // Check if current substring palindrome is greater than the longest one
      if (oddSS.length > longestPalSS.length) {
          longestPalSS = oddSS;
      }
      left--;
      right++;
    }
  }
  return longestPalSS;
}


// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;

