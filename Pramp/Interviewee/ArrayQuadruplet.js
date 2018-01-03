/*
Array Quadruplet
Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.

Example:

input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)
*/

function findArrayQuadruplet(arr, s) {
  // your code goes here
  //  0  1  2  3  4  5  6  7 , arr.length = 8
  // [0, 1, 2, 3, 4, 5, 7, 9]
  //              i  j  l  r

  // Sort array
  arr.sort((a,b) => a - b);

  // Iterate from first pointer at i
  for (let i = 0; i < arr.length - 3; i++) {
    // Iterate from i + 1 using j
    for (let j = i + 1; j < arr.length - 2; j++) {
      // Initialze left and right pointers
      let l = j + 1;
      let r = arr.length - 1;

      while (l < r) {
        let total = arr[i] + arr[j] + arr[l] + arr[r];
        // Check total s versus sum of pointers
        if (total === s) {
          return [arr[i], arr[j], arr[l], arr[r]]
        }
        else if (total < s) {
          l++;
        }
        else {
          r--;
        }
      }
    }
  }

  return []

}

const arr = [2, 7, 4, 0, 9, 5, 1, 3];
const s = 20;

console.log(findArrayQuadruplet(arr, s))
