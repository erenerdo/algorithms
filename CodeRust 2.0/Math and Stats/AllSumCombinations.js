/*
All Sum Combinations
Given a positive integer, print all possible sum combinations using positive integers.
*/

function allSum (n) {
  if (n === 0 || n === 1) return [];
  let left = n;
  let comb = [];
  let curr = null;
  let start = 1;
  return allSumHelper (n, left, comb, curr, start);
}

function allSumHelper(n, left, comb, curr, start) {
  // Base Cases
  if (left < 0) return;
  if (left === 0) {
    comb.push(curr);
    return;
  }

  for (let i = start; i < n; i++) {
    let newCurr;
    if (!curr) newCurr = [i];
    else {
      newCurr = curr.slice();
      newCurr.push(i);
    }
    allSumHelper(n, left - i, comb, newCurr, i);
  }

  return comb;
}

allSum(10);
