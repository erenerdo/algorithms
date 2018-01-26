/*

Create a function that prints every transformation of the string that equals the target
A transformation is: mathemtical expression with + or - mixed in to the every value of the string input

*/
function everyTransformationSum (numStrs, targetSum, currentSum = 0, currentComb = []) {
  // Base Case
  if (numStrs.length === 0 && currentSum === targetSum) {
      console.log(currentComb);
  } else if (numStrs.length === 0) {
      return;
  }

  for (let i = 0; i < numStrs.length; i++) { // O(N)
      let currentNumStr = numStrs.slice(0, i+1); // O(N)
      let remainingStr = numStrs.slice(i+1) // O(N)

      let positiveCurrent = "+" + currentNumStr; // O(N)
      let negativeCurrent = "-" + currentNumStr; // O(N)

      everyTransformationSum(remainingStr, targetSum, currentSum + Number(positiveCurrent), currentComb.concat(positiveCurrent));
      everyTransformationSum(remainingStr, targetSum, currentSum + Number(negativeCurrent), currentComb.concat(negativeCurrent));
  }
}

everyTransformationSum("23425256319", 754)
