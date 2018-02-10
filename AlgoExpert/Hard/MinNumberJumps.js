/*

 Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

Note:
You can assume that you can always reach the last index.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // Edge Cases
  if (nums.length <= 1) return 0;
  if (nums[0] >= nums.length - 1) return 1;

  let maxReach = nums[0];
  let steps = nums[0];
  let i = 1;
  let jumps = 1;

  while (steps && i < nums.length - 1) {
    steps--;
    maxReach = Math.max(maxReach, nums[i] + i);

    if (maxReach >= nums.length - 1) {
      jumps++;
      break;
    }
    if (!steps) {
      steps = maxReach - i;
      jumps++;
    }
    i++;
  }
  return jumps;
};
