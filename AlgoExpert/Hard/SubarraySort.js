/*

Subarray Sort

Write a function that takes in an array of integers of length at least 2. The function should return an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted. If the input array is already sorted, the function should return [-1, -1].

Sample input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
Sample output: [3, 9]

*/

function subarraySort(arr) {
	// Initialize left and right pointers
	let l = 0;
	let r = arr.length - 1;

	// Iterate until we find start of unsorted middle
  while (arr[l] <= arr[l + 1]) l++;
  while (arr[r] >= arr[r - 1]) r--;

	// Edge case, array already sorted
  if (l === arr.length - 1) return [-1, -1];

	// Initiliaze min and max pointers
  let min = Infinity;
  let max = -Infinity;

	// Find min and max of middle portion
  for (let k = l; k <= r; k++) {
      min = Math.min(min, arr[k]);
      max = Math.max(max, arr[k]);
  }

  let shiftsNeed = true;
  // Iterate and shift pointers until shiftings stop
  while (shiftsNeed) {
     	shiftsNeed = false;
      if (max > arr[r]) {
          r++;
          shiftsNeed = true;
      }
      if (min < arr[l]) {
          l--;
          shiftsNeed = true;
      }
  }
  return [l + 1, r - 1];
}

// Do not edit the line below.
exports.subarraySort = subarraySort;

