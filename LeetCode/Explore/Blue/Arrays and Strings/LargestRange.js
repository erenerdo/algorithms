/*

Largest Range

Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of numbers contained in that array. The first number in the output array should be the first number in the range while the second number should be the last number in the range. A range of numbers is defined as a set of numbers that come right after each other in the set of real integers. For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}. Note that numbers do not need to be ordered or adjacent in the array in order to form a range. Assume that there will only be one largest range.

Sample input: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
Sample output: [0, 7]

*/

function largestRange(array) {
  const hMap = {};

  for (let i = 0; i < array.length; i++) {
    hMap[array[i]] = false;
  }

  let count = 0;
  const maxRange = [null, null];

  for (let i = 0; i < array.length; i++) {
    if (hMap[array[i]] === false) {
      hMap[array[i]] = true;
      let hi = array[i] + 1;
      let lo = array[i] - 1;

      while (hMap[lo] === false) {
        hMap[lo] = true;
        lo--;
      }
      while (hMap[hi] === false) {
        hMap[hi] = true;
        hi++;
      }

      if ((hi - 1) - (lo + 1) >= count) {
        maxRange[0] = lo + 1;
        maxRange[1] = hi - 1;
        count = (hi - 1) - (lo + 1);
      }
    }
  }
  return maxRange;
}
// Do not edit the line below.
exports.largestRange = largestRange;
