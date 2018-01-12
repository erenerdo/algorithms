/*

Find low/high index
Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.

*/
/*
Find low/high index
Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.
*/

function findLowHigh (arr, key) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === key) {
      lo = mid;
      hi = mid;
      while (arr[lo] === key) lo--;
      while (arr[hi] === key) hi++;
      return [lo + 1, hi - 1];
    }
    else if (arr[mid] < key) {
      lo = mid + 1;
    }
    else {
      hi = mid - 1;
    }
  }
  return -1;
}

console.log(findLowHigh([1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 1))
console.log(findLowHigh([1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 2))
console.log(findLowHigh([1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 5))
console.log(findLowHigh([1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 20))
console.log(findLowHigh([1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 15))
