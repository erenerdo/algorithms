/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

[1, 7, 3, 4]

your function would return:

[84, 12, 28, 21]

by calculating:

[7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.

*/

// Test Cases
var arr1 = [1, 7, 3, 4]; // result: [84, 12, 28, 21]
var arr2 = [4, 5, 6]; // result: [30, 24, 20]
var arr3 = [3, 2, -1, 6, 5, 2]; // result: [-120, -180, 360, -60, -72, -180]
var arr4 = [4, 6, 0, 2, 1]; // result: [0, 0, 48, 0, 0]
var arr5 = [1, 2, 6, 5, 9]; // result: [540, 270, 90, 108, 60]


// [1, 7, 3, 4]

// First Pass: [1, 1, 7, 21] (left to right)
// Second Pass: [84, 12, 28, 21] (right to left)

// Function Def
function getProductsOfAllIntsExceptAtIndex(arr) {
  // Edge Cases
  if (arr.length < 2) {
    throw new Error('Not enough values');
  }

  // Each new index in the return array is equal to the product of all the values to the left times the product of all the values to the right
  // Therefore we can split this up into two loops that will calculate a running product

  // Initialize return Array
  var returnArr = [];

  // Initialize all values to 1 to be used for running product
  for (var i = 0; i < arr.length; i++){
    returnArr[i] = 1;
  }

  // Start from left to right

  // To be used to calculate running product
  var productSoFar = arr[0];

  for (var j = 1; j < arr.length; j++) {
    returnArr[j] *= productSoFar;
    productSoFar *= arr[j];
  }

  // Now go from right to left and reset productSoFar to last element in arr
  productSoFar = arr[arr.length - 1];

  for (var k = arr.length - 2; k >= 0; k--) {
    returnArr[k] *= productSoFar;
    productSoFar *= arr[k];
  }

  return returnArr;
}

// Run Code
console.log(arr1 + ' -> ' + getProductsOfAllIntsExceptAtIndex(arr1));
console.log(arr2 + ' -> ' + getProductsOfAllIntsExceptAtIndex(arr2));
console.log(arr3 + ' -> ' + getProductsOfAllIntsExceptAtIndex(arr3));
console.log(arr4 + ' -> ' + getProductsOfAllIntsExceptAtIndex(arr4));
console.log(arr5 + ' -> ' + getProductsOfAllIntsExceptAtIndex(arr5));
