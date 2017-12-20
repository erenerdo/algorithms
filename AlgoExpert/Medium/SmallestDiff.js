/*

Smallest Difference

Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero. The function should return an array containing these two numbers, with the number from the first array in the first position. Assume that there will only be one pair of numbers with the smallest difference.

Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
Sample output: [28, 26]

*/
let a1 = [-1, 5, 10, 20, 28, 3];
let a2 = [26, 134, 135, 15, 17];

console.log(smallestDifference(a1, a2));

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);

    let sol = [null, null];
    let i = arrayOne.length - 1;
    let j = arrayTwo.length - 1;
    let smD = Infinity;

    while (i >= 0 && j >= 0) {

        if (Math.abs(arrayOne[i] - arrayTwo[j]) < smD) {
            smD = Math.abs(arrayOne[i] - arrayTwo[j]);
            sol[0] = arrayOne[i];
            sol[1] = arrayTwo[j];
        }

        if (arrayOne[i] > arrayTwo[j]) i--;
        else if (arrayOne[i] < arrayTwo[j]) j--;
        else return sol;
    }

    return sol;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
