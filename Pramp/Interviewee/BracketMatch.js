/*
Bracket Match
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.

Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.

Explain the correctness of your code, and analyze its time and space complexities.

Examples:

input:  text = “(()”
output: 1

input:  text = “(())”
output: 0

input:  text = “())(”
output: 2
*/

function bracketMatch(text) {
  let openCount = 0;
  let closeCount = 0;

  for (let i = 0; i < text.length; i++) {
    // Check if open bracket
    if (text[i] === '(') {
      openCount++;
      continue;
    }
    // Must be close bracket
    // Check if we've seen a matching open bracket if so decrement openCount
    if (openCount) openCount--;
    // If not, no matching opening brack for this closing so increment closeCout
    else closeCount++;
  }
  return closeCount + openCount;
}
