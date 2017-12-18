/*

Given two strings, str1 and str2, write code to check if str2 is a rotation of str1
(e.g., waterbottle a rotation erbottlewat ).

*/

console.log(isRotation('waterbottle', 'erbottlewat')); // true
console.log(isRotation('apple', 'pleap')); // true
console.log(isRotation('pizza', 'zzipa')); // false
console.log(isRotation('balloon', 'lloonbaa')); // false


function isRotation(str1, str2) {

  // Look for where begining of str1 equals begining of str2
  if (str1.length !== str2.length) return false;

  let start = 0;
  while (start < str2.length) {
    if (str2[start] === str1[0]) break;
    start++;
  }

  let ptr = 0;

  while (ptr < str1.length) {
    if (str1[ptr] === str2[start]) {
      ptr++;
      start++;
    } else {
      return false;
    }
    if (start === str2.length) start = 0;
  }
  return true;
}
