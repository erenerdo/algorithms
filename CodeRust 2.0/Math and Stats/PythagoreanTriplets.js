/*
Pythagorean Triplets
Given an integer array find all Pythagorean triplets.
*/

function pythagoreanTrips (nums) {
  nums.sort((a,b) => a-b);
  const sols = [];

  for (let i = nums.length - 1; i > 1; i--) {
    let lo = 0;
    let hi = i - 1;
    while (lo < hi) {
      let a2b2 = Math.pow(nums[lo], 2) + Math.pow(nums[hi], 2);
      let c2 = Math.pow(nums[i], 2);

      if (a2b2 < c2) lo++;
      else if (a2b2 > c2) hi--;
      else {
        sols.push([nums[lo], nums[hi], nums[i]]);
        lo++;
        hi--;
      }
    }
  }
  return sols;
}

let arr = [4, 16, 1, 2, 3, 5, 6, 8, 25, 10]
pythagoreanTrips(arr)
