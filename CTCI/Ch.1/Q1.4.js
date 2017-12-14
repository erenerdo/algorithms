/*

Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rea rrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)
Hints: #106, #121, #134, #136

*/

function palindromePerm(str) {
  // Store all chars in an object, ignore spaces
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    if (charCount[str[i]]) charCount[str[i]] += 1;
    else charCount[str[i]] = 1;
  }

  let oddCount = 0;

  for (let char in charCount) {
    if (charCount[char] % 2 === 1) oddCount++;
    if (oddCount > 1) return false;
  }
  return true;
}


// Tests
didPass(palindromePerm('banana'), false);
didPass(palindromePerm('taco cat'), true);
didPass(palindromePerm('race car'), true);
didPass(palindromePerm('apple'), false);


function didPass(answer, solution) {
  if (answer === solution) console.log('Passsed');
  else console.log('Failed');
}
