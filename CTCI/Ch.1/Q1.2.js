/*

Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

*/

// O(n + m) run time, O(n) space
function isPerm (str1, str2) {
  // create object to count values
  const charVal = {};

  // Add values in str1
  for (let i = 0; i < str1.length; i++) {
    if (charVal[str1[i]]) charVal[str1[i]] += 1;
    else charVal[str1[i]] = 1;
  }

  // Iterate through second str
  for (let j = 0; j < str2.length; j++) {
    if (!charVal[str2[j]] || charVal[str2[j]] === 0) return false;
    else charVal[str2[j]] -= 1;
  }

  // Check to make sure all values in charVal are now 0
  for (let char in charVal) {
    if (charVal[char] !== 0) return false;
  }

  return true;
}

// Tests
didPass(isPerm('banana', 'abnnaa'), true); // true
didPass(isPerm('poop', 'plop'), false); // false
didPass(isPerm('cannon', 'nancon'), true); // true
didPass(isPerm('peach', 'apple'), false); // false


function didPass(answer, solution) {
  if (answer === solution) console.log('Passsed');
  else console.log('Failed');
}
