/*

Remove white spaces
Given a null terminated string, remove any white spaces (tabs or spaces)

*/

let str1 = ' abc d     e f     g';
let str2 = '        efg     abc';
let str3 = ' a';
let str4 = 'b ';

console.log(removeWhitespace(str1));
console.log(removeWhitespace(str2));
console.log(removeWhitespace(str3));
console.log(removeWhitespace(str4));

function removeWhitespace(str) {
  const charArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      charArr.push(str[i]);
    }
  }

  return charArr.join('');
}
