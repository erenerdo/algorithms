/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(arr) {
  let trail = 0;

  // Find left most zero
  while (arr[trail] !== 0 && trail < arr.length) {
    trail++;
  }

  for (let i = trail + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      swap(arr, i, trail);
      trail++;
    }
  }
};

function swap (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
