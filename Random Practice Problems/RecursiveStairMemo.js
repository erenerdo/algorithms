function recStairCase (num) {
  var hMap = new Map();
  return recStairMemo(num, hMap);
}

function recStairMemo(num, memo) {
  console.log('Checking recStairMemo(' + num + ')');
  // Base Case
  if (num === 0) {
    console.log('Base Case. Returning recStairMemo(' + num + ') is 1');
    return 1;
  } else if (num < 0) {
    console.log('Base Case. Returning recStairMemo(' + num + ') is 0');
    return 0;
  }

  // check if num is in memo
  if (memo.has(num)) {
    console.log('recStairMemo(' + num + ') found in Memo!, ' + memo.get(num) + ' returned');
    return memo.get(num);
  }

  var val1 = recStairMemo(num - 1, memo);
  var val2 = recStairMemo(num - 2, memo);
  var val = val1 + val2;
  console.log('recStairMemo(' + num + ') not in memo. Computed and got ' + val + ' returned');

  memo.set(num, val);

  return val;
}

console.log(recStairCase(15));
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2
