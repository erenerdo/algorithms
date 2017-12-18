/*

Powerset

Write a function that takes in an array of unique integers and returns its powerset. The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1,2] is [[], [1], [2], [1,2]].

Sample input: [1, 2, 3]
Sample output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

*/

/*

1. Add pSet as an array and initialize it to [[]]
2. Shift the value off the input array
3. Iterate through the pSet
4. For each array in the pSet. Copy it, add the shifted value to the copy,
and add it back to the pSet
5. Recursively call powerset again
6. If the input array is length zero, return the powerset

*/

function powerset(array, pSet = [[]]) {
  // Base Case
  if (!array.length) return pSet;

  // Get value off array
  let val = array.shift();

  // Save pSet length since we'll be adding to it
  let pSetLength = pSet.length;

  for (let i = 0; i < pSetLength; i++) {
    // Copy values in pSet
    let copy = pSet[i].slice();
    // Add val to it
    copy.push(val);
    // Add the copied array in pSet
    pSet.push(copy);
  }
  return powerset(array, pSet);
}
// Do not edit the line below.
exports.powerset = powerset;
