/*

Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. (an you do this in place?

*/

const matrix1 = new Array(5).fill([]);
matrix1[0] = [1, 2, 3, 4, 5];
matrix1[1] = [6, 7, 8, 9, 10];
matrix1[2] = [11, 12, 13, 14, 15];
matrix1[3] = [16, 17, 18, 19, 20];
matrix1[4] = [21, 22, 23, 24, 25];

const matrix5 = new Array(4).fill([]);
matrix5[0] = [1, 2, 3, 4];
matrix5[1] = [5, 6, 7, 8];
matrix5[2] = [9, 10, 11, 12];
matrix5[3] = [13, 14, 15, 16];


const matrix2 = new Array(3).fill([]);
matrix2[0] = [1, 2, 3];
matrix2[1] = [4, 5, 6];
matrix2[2] = [7, 8, 9];

const matrix3 = new Array(2).fill([]);
matrix3[0] = [1, 2];
matrix3[1] = [4, 5];

const matrix4 = new Array(1).fill([]);
matrix4[0] = [1];


console.log('\nBefore Rotation');
printMatrix(matrix1);

rotateMatrix(matrix1);

console.log('\nAfter Rotation');
printMatrix(matrix1);

console.log('\nBefore Rotation');
printMatrix(matrix5);

rotateMatrix(matrix5);

console.log('\nAfter Rotation');
printMatrix(matrix5);


console.log('\nBefore Rotation');
printMatrix(matrix2);

rotateMatrix(matrix2);

console.log('\nAfter Rotation');
printMatrix(matrix2);

console.log('\nBefore Rotation');
printMatrix(matrix3);

rotateMatrix(matrix3);

console.log('\nAfter Rotation');
printMatrix(matrix3);

console.log('\nBefore Rotation');
printMatrix(matrix4);

rotateMatrix(matrix4);

console.log('\nAfter Rotation');
printMatrix(matrix4);

function rotateMatrix (matrix) {
    let layers = Math.floor(matrix.length / 2);
    for (let layer = 0; layer <= layers; layer++) {
        let layerMin = layer;
        let layerMax = matrix.length - 1 - layer;

        for (let i = 0; i < layerMax - layerMin; i++) {
            let top = matrix[layerMin][i + layerMin];
            let right = matrix[i + layerMin][layerMax];
            let bottom = matrix[layerMax][layerMax - i];
            let left = matrix[layerMax - i][layerMin];


            // Reassign top
            matrix[layerMin][i + layerMin] = left;
            // Reassign right
            matrix[i + layerMin][layerMax] = top;
            // Reassign bottom
            matrix[layerMax][layerMax - i] = right;
            // Reassign left
            matrix[layerMax - i][layerMin] = bottom;

        }
    }
    return matrix;
}


function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
}
