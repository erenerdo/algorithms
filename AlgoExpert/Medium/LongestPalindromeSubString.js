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
    // Check for even palindromes
    let evenPal = getPalindromeSS(string, i, i+1);
    // Check for odd palindromes, reset values
    let oddPal = getPalindromeSS(string, i, i);

    let currentPal = evenPal.length > oddPal.length ? evenPal : oddPal;

    if (currentPal.length > longestPalSS.length) {
      longestPalSS = currentPal;
    }
  }
  return longestPalSS;
}

function getPalindromeSS(string, left, right) {
    let currentLongestPalSS = '';
    while (left >= 0 && right < string.length) {

      if (string[left] !== string[right]) break;

      let palSS = string.substring(left, right + 1);

    	// Check if current substring palindrome is greater than the longest one
      if (palSS.length > currentLongestPalSS.length) {
        currentLongestPalSS = palSS;
      }
      left--;
      right++;
    }
    return currentLongestPalSS;
}


// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;



// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;

