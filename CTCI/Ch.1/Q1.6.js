/*

1.6 String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

function stringCompr(str) {
  let compStr = str[0];
  let currentChar = str[0];
  let currentCount = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) currentCount++;
    else {
      compStr += currentCount + str[i];
      currentChar = str[i];
      currentCount = 1;
    }
  }

  compStr += currentCount;

  if (compStr.length < str.length) return compStr;
  return str;
 }


 // Tests
 didPass(stringCompr('aabcccccaaa'), 'a2b1c5a3');
 didPass(stringCompr('abcde'), 'abcde');


 function didPass(answer, solution) {
   if (answer === solution) console.log('Passsed');
   else console.log('Failed');
 }
