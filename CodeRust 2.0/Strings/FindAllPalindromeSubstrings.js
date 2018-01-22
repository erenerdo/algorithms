/*
Find all palindrome substrings
Given a string find all substrings that are palindromes.
*/

// Return all substrings starting from left and right outward
function palSubstr (str, left, right) {
  const pals = [];
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    let subStr = str.slice(left, right + 1);
    pals.push(subStr);
    left--;
    right++;
  }
  return pals;
}

function allPalindromeSubstrings (str) {
  // Edge cases
  if (!str || str.length <= 1) return [];
  let all = [];
  for (let i = 0; i < str.length; i++) {
    let oddLenPals = palSubstr(str, i - 1, i + 1);
    let evenLenPals = palSubstr(str, i, i + 1);
    all = all.concat(oddLenPals).concat(evenLenPals);
  }
  return all;
}

console.log(allPalindromeSubstrings('aabbbaa'));
console.log(allPalindromeSubstrings('racecar'));
console.log(allPalindromeSubstrings('abbcdedcbba'));
