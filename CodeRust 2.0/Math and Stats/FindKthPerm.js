function findKthPerm (elements, k, kthPerm = []) {
  if (!elements || !elements.length) return kthPerm;

  let n = elements.length;
  let startIdx = Math.floor((k-1)/fact(n - 1));
  let newK = k - fact(n-1) * startIdx;

  let startEle = elements.splice(startIdx, 1)[0];
  kthPerm.push(startEle);

  return findKthPerm(elements, newK, kthPerm);
}

function fact (n) {
  let factorial = 1;
  while (n > 1) {
    factorial *= n;
    n--;
  }

  return factorial;
}

console.log(findKthPerm([1, 2, 3], 3)); // 2, 1, 3
console.log(findKthPerm([1, 2, 3, 4], 3)); // 1, 3, 2, 4
console.log(findKthPerm([1, 2, 3, 4, 5], 2)); // 1, 2, 3, 5, 4
