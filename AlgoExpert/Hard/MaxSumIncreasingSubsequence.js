function maxSumIncreasingSubsequence(nums) {
  // Edge Case
  if (!nums || !nums.length) return [0,[]];

	// Initiliaze DP array
	const dp = new Array(nums.length);
	dp[0] = [nums[0], [nums[0]]];
	let globalMax = 0;

	for (let i = 1; i < nums.length; i++) {
	  let maxSubseq = [nums[i]];
    let max = nums[i];

	  for (let j = 0; j < i; j++) {
	    if (nums[i] > nums[j] && nums[i] + dp[j][0] > max ) {
	      max = nums[i] + dp[j][0];
	      maxSubseq = dp[j][1].concat(nums[i]);
	    }
	  }

	  if (max > dp[globalMax][0]) globalMax = i;
	  dp[i] = [max, maxSubseq];
	}

	return dp[globalMax];
}

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;
