/*
Sum of Three Values
Given an array of integers and a value, determine if there are any three integers in the array that sum equal to the given value.
*/


function threeSum(nums, target) {
  if (nums.length <= 2) return false;
  sort(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
      if (sum === target) return true;
      else if (sum < target) lo++;
      else hi--;
    }
  }
  return false;
}

function sort (nums) {
  // Edge case
  if (nums.length <= 1) return nums;

  quickSort(nums, 0, nums.length - 1);
}

function quickSort(nums, lo, hi) {
  if (lo >= hi) return;

  let initalLo = lo;
  let initialHi = hi;
  let pivot = hi--;

  while (lo <= hi) {
    // Look for left most value to swap
    while (nums[lo] < nums[pivot]) lo++;
    // Look for right most value to swap
    while (nums[hi] >= nums[pivot]) hi--;

    if (lo <= hi) {
      swap(nums, lo, hi);
      lo++;
      hi--;
    }
  }

  swap(nums, lo, pivot);
  quickSort(nums, initalLo, hi);
  quickSort(nums, lo + 1, initialHi);
}

function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [3, 7, 1, 2, 8, 4, 5];

threeSum(nums, 21);
