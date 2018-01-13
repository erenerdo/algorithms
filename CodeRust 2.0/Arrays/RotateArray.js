/*

Rotate Array
Given an array of integers, rotate the array by 'N' elements.

*/

function rotateArr (nums, k) {
  const n = nums.length;
  k = k % n;
  if (k < 0) k = k + n;

  // Reverse the entire array
  reverse(nums, 0, n - 1);
  // Reverse the subarray from k to n
  reverse(nums, k, n - 1);
  // Reverse the subarray from 0 to k -1
  reverse(nums, 0, k - 1);

  return nums;
}

function reverse (nums, startIdx, endIdx) {
  while (startIdx < endIdx)  {
    swap(nums, startIdx, endIdx);
    startIdx++;
    endIdx--;
  }
}

function swap (nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 2));
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 9));
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], -1));
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 12));
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 5));
