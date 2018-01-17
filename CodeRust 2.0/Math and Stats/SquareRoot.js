function sqrt(n) {
  // Edge case
  if (n === 0) return 0;
  let lo = 0.0;
  let hi = 1.0 + n / 2.0;

  const errorRate = 0.0001;

  while (lo < hi) {
    let mid = (lo + hi) / 2;
    let sqr = mid * mid;
    let diff = Math.abs(n - sqr);

    if (diff < errorRate) {
      return mid;
    }
    else if (sqr < n) {
      lo = mid;
    }
    else {
      hi = mid;
    }
  }
  return -1;
}

sqrt(.10)
