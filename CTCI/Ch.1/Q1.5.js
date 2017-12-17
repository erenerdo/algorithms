/*

One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE
pale, ple -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false

*/


function oneAway (strA, strB) {
  let count = 0;
  let i = 0;
  let j = 0;

  if (Math.abs(strA.length - strB.length) > 1) {
    return false;
  }

  while (i < strA.length && j < strB.length) {
    if (strA[i] === strB[j]) {
      i++;
      j++;
    }
    else if (strA[i + 1] === strB[j]) {
      i++;
      count++;
    }
    else if (strA[i] === strB[j + 1]) {
      j++;
      count++;
    }
    else {
      i++;
      j++;
      count++;
    }
  }

  if (i < strA.length || j < strB.length) {
    count++;
  }

  return count < 2;
}

console.log(oneAway('pale','ple')); // true
console.log(oneAway('pales','pale')); // true
console.log(oneAway('pale','bale')); // true
console.log(oneAway('pale','bake')); // false



