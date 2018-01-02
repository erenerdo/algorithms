/*
Shifted Binary Search

Write a function that takes in a sorted array of integers as well as a target integer. The caveat is that the numbers in the array have been shifted by some amount; in other words, they have been moved to the left or the right by one or more positions. For example, [1, 2, 3, 4] might become [3, 4, 1, 2]. The function should use a variation of the Binary Search algorithm to find if the target number is contained in the array and should return its index if it is, otherwise -1.

Sample input: [45, 61, 71, 72, 73, 0, 1, 21, 33, 45], 33
Sample output: 8
*/

function shiftedBinarySearch(nums, target) {
	let lo = 0;
	let hi = nums.length - 1;

	while (lo <= hi) {
		let mid = Math.floor((lo + hi) / 2);
		// Check if mid is on target
		if (nums[mid] === target) return mid;
		// Left side is sorted
		else if (nums[mid] > nums[lo]) {
			// Target in left side
			if (target >= nums[lo] && target < nums[mid]) {
				hi = mid - 1;
			}
			// Target on right side
			else lo = mid + 1;
		}
		// Right side is sorted
		else {
			// Target on right side
			if (target > nums[mid] && target <= nums[hi]) {
				lo = mid + 1;
			}
			else hi = mid - 1;
		}
	}
	return -1;
}


// Do not edit the line below.
exports.shiftedBinarySearch = shiftedBinarySearch;
