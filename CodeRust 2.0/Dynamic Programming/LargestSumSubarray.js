/*
Largest Sum Subarray
Given an array, find the contiguous subarray with the largest sum.
*/

function maxSumSubarray (nums) {
  let currentSum = -Infinity;
  let globalMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    globalMax = Math.max(currentSum, globalMax);
  }
  return globalMax;
}

let arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1];

console.log(maxSumSubarray(arr));
