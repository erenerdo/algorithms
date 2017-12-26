/**
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  // Find lowest element
  while (lo < hi) {
      let mid = lo + Math.floor((hi-lo)/2);
      if (nums[mid] > nums[hi]) lo = mid + 1;
      else hi = mid;
  }
  let lowestIdx = hi;

  // Reset low and hi
  lo = 0;
  hi = nums.length - 1;
  if (target <= nums[hi]) lo = lowestIdx;
  else hi = lowestIdx - 1;

  // Regular binary search
  while (lo <= hi) {
      let mid = lo + Math.floor( (hi-lo)/2 );
      if (target < nums[mid]) hi = mid - 1;
      else if (target > nums[mid]) lo = mid + 1;
      else return mid;
  }

  return -1;
};
