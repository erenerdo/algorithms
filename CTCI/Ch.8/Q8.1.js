/*
Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.
*/

function tripleStep (num, memo = {}) {
  if (num === 0) return 1;
  if (num < 0) return 0;
  if (memo[num]) return memo[num];

  memo[num] = tripleStep(num - 1, memo) + tripleStep(num - 2, memo) + tripleStep(num - 3, memo)

  return memo[num];
}

/*

1, 1, 1
1, 2
2, 1
3

*/

console.log(tripleStep(5))
