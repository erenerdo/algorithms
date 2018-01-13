/*

Find low/high index
Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.

*/
/*
Find low/high index
Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.
*/

function findLowIndex (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] >= target) hi = mid - 1;
    else lo = mid + 1;
  }
  if (nums[lo] === target) return lo;
  return -1;
}

console.log(findLowIndex([1, 2, 4, 5, 5, 5, 5, 5, 6, 6, 7, 8, 11], 5));
console.log(findLowIndex([1, 2, 4], 2));
console.log(findLowIndex([1, 2, 4], 3));


function findHighIndex (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > target) hi = mid - 1;
    else lo = mid + 1;
  }
  if (nums[hi] === target) return hi;
  return -1;
}

console.log(findHighIndex([1, 2, 4, 5, 5, 5, 5, 5, 6, 6, 7, 8, 11], 5));
console.log(findHighIndex([1, 2, 4], 2));
console.log(findHighIndex([1, 2, 4], 3));
