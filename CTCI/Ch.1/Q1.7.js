/*

Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. (an you do this in place?

*/

const matrix = new Array(5).fill([]);
matrix[0] = [1, 5, 0, 3, 2];
matrix[1] = [3, 7, 1, 6, 3];
matrix[2] = [1, 2, 4, 4, 0];
matrix[3] = [1, 5, 2, 3, 2];
matrix[4] = [0, 5, 1, 3, 2];

console.log('Given');
console.log(matrix);

const sol = new Array(5).fill([]);
sol[0] = [0, 1, 1, 3, 1];
sol[1] = [5, 5, 2, 7, 5];
sol[2] = [1, 2, 4, 1, 0];
sol[3] = [3, 3, 4, 6, 3];
sol[4] = [2, 2, 0, 3, 2];

console.log('\nSolution');
console.log(sol);

function rotateMatrix (mat) {

}
