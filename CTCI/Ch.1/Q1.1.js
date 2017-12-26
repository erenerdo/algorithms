/*

Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

*/

// Extra memory, O(n) time, O(n) space
function isUnique(str) {
  // Add all elements to a hashSet and check if it was been seen before
  let hSet = new Set();

  for (let i = 0; i < str.length; i++) {
    if (hSet.has(str[i])) return false;
    hSet.add(str[i]);
  }
  return true;
}

// No extra memory. O(N^2) time, O(1) memory
function isUnique2(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}



// Tests
didPass(isUnique('abcde'), true) // true
didPass(isUnique('abcbc'), false) // false
didPass(isUnique('a'), true) // true
didPass(isUnique('abcdefga'), false) // false


function didPass(answer, solution) {
  if (answer === solution) console.log('Passsed');
  else console.log('Failed');
}
