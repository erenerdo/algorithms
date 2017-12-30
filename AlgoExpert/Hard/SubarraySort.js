/*

Subarray Sort

Write a function that takes in an array of integers of length at least 2. The function should return an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted. If the input array is already sorted, the function should return [-1, -1].

Sample input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
Sample output: [3, 9]

*/

function subarraySort(arr) {
  let i = 0;
  while (arr[i] <= arr[i + 1] && i < arr.length) i++;

  if (i === arr.length - 1) return [-1, -1];

  let j = arr.length - 1;
  while (arr[j] >= arr[j - 1]) j--;

  let min = Infinity;
  let max = -Infinity;

  for (let k = i; k <= j; k++) {
      min = Math.min(min, arr[k]);
      max = Math.max(max, arr[k]);
  }

  let shifts = true;

  while (shifts) {
      shifts = false;
      if (max > arr[j]) {
          j++;
          shifts = true;
      }
      if (min < arr[i]) {
          i--;
          shifts = true;
      }
  }
  return [i + 1, j - 1];
}
