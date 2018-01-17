/*

Remove Duplicates
Remove duplicate characters from a string.

Description
Given a string that contains duplicate occurrences of characters, remove these duplicate occurrences.

For example, if the input string is "abbabcddbabcdeedebc", after removing duplicates it should become "abcde".

*/

function removeDupsStr(str) {
  const uniques = [];
  const hSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!hSet.has(char)) {
      uniques.push(char);
      hSet.add(char);
    }
  }
  return uniques.join('');
}

removeDupsStr('abbabcddbabcdeedebc');
removeDupsStr('eabbabcddbabcdeedebc');
removeDupsStr('aaaa');
removeDupsStr('aabaa');
