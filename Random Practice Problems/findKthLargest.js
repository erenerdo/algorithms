/*

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/* Steps
  - Perform quicksort until pivot gets move to array.length - k;

*/
var findKthLargest = function(array, k, idx = array.length - k, lo = 0, hi = array.length - 1) {
  // Edge Cases
  if (lo === hi) return array[lo];
  else if (lo > hi) return null;

  // Get pivot
  let p = hi;
  hi--;

  let initialLo = 0;

  while (lo <= hi) {
    // Move lo to a value > pivot
    while (lo < array.length && array[lo] < array[p]) lo++;

    // Move hi to a value < pivot
    while (hi >= 0 && array[hi] >= array[p]) hi--;

    if (lo <= hi) {
      swap(array, lo, hi);
      lo++;
      hi--;
    }
  }

  // Check if lo, which is where we will swap p to, is at array.length - k;
  if (lo === idx) return array[p];

  // Swap
  swap(array, lo, p)

  if (idx > lo) return findKthLargest(array, k, idx, lo + 1, p);
  else return findKthLargest(array, k, idx, initialLo, hi);

}

function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
