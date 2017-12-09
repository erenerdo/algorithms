// Chapter 1: Arrays and Strings
// IQ 1.4 "Palindrome Permutation"
/*

Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwords.
A permutation is a rearrangement of letters

*/


var a = 'Tact coa'; // True
var b = 'Pizza'; // False
var c = 'Race Car'; // True

console.log(a + ' -> ' + isPalin(a));
console.log(b + ' -> ' + isPalin(b));
console.log(c + ' -> ' + isPalin(c));

function isPalin(word) {
  // Remove spaces and
  word = word.split(' ').join('').toLowerCase();

  // Create pointers to check chars
  var i = 0;
  var j = word.length - 1;
  console.log()

  while (i <= j) {
    if (word[i] !== word[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
