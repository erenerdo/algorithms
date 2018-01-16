/*
Permute String
Implement a method to print all permutations of a given string.
*/

function permuteString (str, curr = '', perms = []) {
  // Base Case
  if (str.length === 0) {
    perms.push(curr);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let newCurr = curr.slice();
    let strCopy = str.slice();
    strCopy = strCopy.slice(0, i) + strCopy.slice(i + 1);
    newCurr += char;
    permuteString(strCopy, newCurr, perms);
  }

  return perms;
}

permuteString('bac');
