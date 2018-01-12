/*

Move zeros to left
Given an integer array, move all elements containing '0' to the left while maintaining the order of other elements in the array.

*/

function moveZerosLeft (nums) {
  let zeroPtr = nums.length - 1;

  // Find right most zero element
  while (zeroPtr >= 0 && nums[zeroPtr] !== 0) {
    zeroPtr--;
  }

  for (let i = zeroPtr - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      swap(nums, i, zeroPtr);
      zeroPtr--;
    }
  }

  return nums;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(moveZerosLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]))
console.log(moveZerosLeft([1, 10, 20, 0, 88, 0, 22, 56]))
console.log(moveZerosLeft([1, 2, 3, 4, 0, 5, 6, 7]))
