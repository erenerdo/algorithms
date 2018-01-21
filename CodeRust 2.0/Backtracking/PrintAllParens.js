/*
All Possible Parentheses
Print all parentheses combinations for a given value 'n' such that they are balanced.
*/

function printAllParens (n, curComb = "", num = 0) {
  if (num < 0 || num > n) return false;
  if (num === 0 && 2*n === curComb.length) {
    console.log(curComb);
    return true;
  }
  else if (2*n === curComb.length) return false;

  printAllParens(n, curComb + "(", num + 1);
  printAllParens(n, curComb + ")", num - 1);
}
