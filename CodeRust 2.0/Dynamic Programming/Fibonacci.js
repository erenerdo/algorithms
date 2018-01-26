/*
Fibonacci numbers
Find the nth fibonacci number.
*/

function fibo (n) {
  // Base Cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  let nMinus1 = 1; // (n-1)
  let nMinus2 = 0; // (n-2)
  let fib;

  for (let i = 2; i <= n; i++) {
    fib = nMinus1 + nMinus2;
    nMinus2 = nMinus1;
    nMinus1 = fib;
  }

  return fib;
}

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));
