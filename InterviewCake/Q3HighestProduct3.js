/*

Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.

*/

// Test Case
var arr1 = [1, 5, 3, 7, 2, 6]; // 5 * 7 * 6 -> 210
var arr2 = [-5, 2, 1, -7, 12, 4, 1, -8]; // -7 * -8 * 12 -> -672
var arr3 = [-2, -12, -20, -4, -1, -3]; // -1 * -2 * -3 -> -6
var arr4 = [1, 5, 2]; // 1 * 5 * 2 -> 10

// Function
function highestProductOfThree(arr) {
// Brute Force: Try every combination of numbers and return the max
// Would take O(N^3) time though


// Keep track of the highestProductOf2 and lowestProductOf2
var highestProductOf3 = arr[0] * arr[1] * arr[2];
var highestProductOf2 = arr[0] * arr[1];
var highest = Math.max(arr[0], arr[1]);
var lowestProductOf2 = arr[0] * arr[1];
var lowest = Math.min(arr[0], arr[1]);


for (var i = 2; i < arr.length; i++) {
  var current = arr[i];

  // Check if highest
  highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * current, lowestProductOf2 * current);

  // do we have a new highest product of two?
  highestProductOf2 = Math.max(highestProductOf2, current * highest, current * lowest);

  // do we have a new lowest product of two?
  lowestProductOf2 = Math.min(lowestProductOf2, current * highest, current * lowest);

  // do we have a new highest?
  highest = Math.max(highest, current);

  // do we have a new lowest?
  lowest = Math.min(lowest, current);
}
  return highestProductOf3;
}

console.log(arr1 + ' -> ' + highestProductOfThree(arr1));
console.log(arr2 + ' -> ' + highestProductOfThree(arr2));
console.log(arr3 + ' -> ' + highestProductOfThree(arr3));
console.log(arr4 + ' -> ' + highestProductOfThree(arr4));
