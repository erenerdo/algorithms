/*
Find Missing Number
Given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one. Find the missing number.
*/

function findMissingNumber (nums, n) {
  let expectedTotal = (n*(n+1))/2;
  let actualTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    actualTotal += nums[i];
  }

  return expectedTotal - actualTotal;
}

let arr = [1, 3, 5, 2, 7, 6, 8] // 4
let n = 8;
console.log(findMissingNumber(arr, n))

arr = [1, 3, 5, 4, 7, 6, 8] // 2
n = 8;
console.log(findMissingNumber(arr, n))

arr = [2, 3, 5, 4, 7, 6, 8] // 1
n = 8;
console.log(findMissingNumber(arr, n))
