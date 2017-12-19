/*
Kadane's Algorithm

Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all the numbers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers.

Sample input: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
Sample output: 19 ([1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1])
*/

function kadanesAlgorithm(array) {
	// Initialie variables to first element
  let currentSum = array[0];
  let globalMaxSum = array[0];

  // Edge Case if first element is less than zero
  if (currentSum < 0) currentSum = 0;

  for (let i = 1; i < array.length; i++) {
    // Add current integer to current sum
    currentSum += array[i];
		// Reassign global max
    globalMaxSum = Math.max(globalMaxSum, currentSum);
		// Reset current sum if needed
    if (currentSum < 0) currentSum = 0;
  }

  return globalMaxSum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
