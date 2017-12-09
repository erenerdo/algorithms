// Calculate Fibonacci numbers recursively using memoization

function fibo(num) {
  var myMap = new Map();
  return fiboMemo(num, myMap);
}

function fiboMemo(num, hashMemo) {


  // Base Cases
  if (num === 0) {
    console.log('Fibo(' + num + ') Found: 1');
    return 0;
  }
  if (num === 1) {
    console.log('Fibo(' + num + ') Found: 1');
    return 1;
  }
  // Check memo
  if (hashMemo.has(num)) {
    // Number seen before
    console.log('Fibo(' + num + ') Found: ' + hashMemo.get(num));
    return hashMemo.get(num);
  }
  // Number not seen before
  console.log('Computing Fibo(' + num + ')');
  hashMemo.set(num, fiboMemo(num - 1, hashMemo) + fiboMemo(num - 2, hashMemo));
  console.log('Fibo(' + num + ') Found: ' + hashMemo.get(num));
  return hashMemo.get(num);
}

var num = 8;
console.log('Fibonaccing number of ' + num + ' is ' + fibo(num));
