/*
Binary Search:
Given a sorted array of integers, return the index of the given key. Return -1 if not found.
*/

function binarySearch(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  let mid;

  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);

    if (target > nums[mid]) lo = mid + 1;
    else if (target < nums[mid]) hi = mid - 1;
    else return mid;
  }
  return -1;
}

// Tests
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)) // return index 3
console.log(binarySearch([1, 23, 24, 34, 35, 67, 75, 88, 89, 1000], 23)) // return index 1
console.log(binarySearch([1, 23, 24, 34, 35, 67, 75, 88, 89, 1000], 15)) // return -1

