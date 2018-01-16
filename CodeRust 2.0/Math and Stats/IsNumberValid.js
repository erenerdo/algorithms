/*
Is Number Valid?
Given an input string, determine if it makes a valid number or not. For simplicity, assume that white spaces are not present in the input.

4.325 is a valid number.
1.1.1 is NOT a valid number.
222 is a valid number.
22. is a valid number.
22.22. is NOT a valid number.
*/

function isNumValid (str) {
  let pointCount = 0;

  let i = 0;
  if (str[i] === '+' || str[i] === '-') i++;

  for (i; i < str.length; i++) {
    if (str[i] === '.') {
      pointCount++;
      if (pointCount > 1) return false;
    }
    else if (str[i] < '0' || str[i] > '9') return false;
  }

  return true;
}

console.log(isNumValid('4.325'));
console.log(isNumValid('1.1.1'));
console.log(isNumValid('222'));
console.log(isNumValid('22.'));
console.log(isNumValid('22.22.'));
