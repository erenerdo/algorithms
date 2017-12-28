/*
Water Area

You are given an array of integers. Each non-zero integer represents the height of a pillar of width 1. Imagine water being poured over all of the pillars and return the surface area of the water trapped between the pillars viewed from the front. Note that spilled water should be ignored. Refer to the first minute of the video explanation below for a visual example.

Sample input: [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
Sample output: 48
*/

function waterArea(heights) {
  let maxSoFar = 0;
  const leftMax = new Array(heights.length).fill(0);
  const rightMax = leftMax.slice();

  // Find left max at each index
  for (let i = 0; i < heights.length; i++) {
      leftMax[i] = maxSoFar;
      maxSoFar = Math.max(maxSoFar, heights[i]);
  }
  // Reset maxSoFar
  maxSoFar = 0;

  // Find right max at each index
  for (let i = heights.length - 1; i >= 0; i--) {
      rightMax[i] = maxSoFar;
      maxSoFar = Math.max(maxSoFar, heights[i]);
  }
  let totalArea = 0;

  // iterate through heights and calculate total area at each index
  for (let i = 0; i < heights.length; i++) {
      let idxArea = Math.min(leftMax[i], rightMax[i]) - heights[i];
      if (idxArea > 0) totalArea += idxArea;
  }

  return totalArea;
}

// Do not edit the line below.
exports.waterArea = waterArea;
