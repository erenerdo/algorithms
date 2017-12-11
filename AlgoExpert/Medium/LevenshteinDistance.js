/*

Levenshtein Distance

Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string. There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.

Sample input: "abc", "yabd"
Sample output: 2 (insert "y"; substitute "c" for "d")

*/
function levenshteinDistance(str1, str2) {
  let i = 0;
  let j = 0;
  let count = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    }
    else if (str2[j + 1] === str1[i]) {
      j++;
      count++;
    }
    else if (str1[i + 1] === str2[j]) {
      i++;
      count++;
    }
    else {
      i++;
      j++;
      count++;
    }
  }
  if (i < str1.length) {
    count += str1.length - i;
  }
  if (j < str2.length) {
    count += str2.length - j;
  }

  return count;
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
