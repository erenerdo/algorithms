/*
Sum of Two Values:
Given an array of integers and a value, determine if there are any two integers in the array which sum equal to the given value.

*/

function twoSum(arr, total) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (seen.has(total - current)) {
      return true;
    }
    seen.add(current);
  }
  return false;
}

const arr = [5, 7, 1, 2, 8, 4, 3];
console.log(twoSum(arr, 9)); // true
console.log(twoSum(arr, 14)); // false
