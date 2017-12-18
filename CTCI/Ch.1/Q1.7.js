/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.
*/

const arr = new Array(5).fill([]);
arr[0] = [1, 5, 0, 3, 2, 6, 0];
arr[1] = [3, 7, 1, 6, 3, 6, 4];
arr[2] = [1, 2, 4, 4, 0, 5, 4];
arr[3] = [1, 5, 2, 3, 2, 6, 4];
arr[4] = [0, 5, 1, 3, 2, 6, 0];

console.log(arr);
console.log('');
zeroMatrix(arr);
console.log(arr);

function zeroMatrix (array) {
  let zeroPairs = [];

  for (let r = 0; r < array.length; r++) {
    for (let c = 0; c < array[r].length; c++) {
      if (array[r][c] === 0) {
        zeroPairs.push([r,c]);
      }
    }
  }
  zeroPairs.forEach(pair => {
    // set every row in pairs equal to zero
    for (let col = 0; col < array[0].length; col++) {
      array[pair[0]][col] = 0;
    }

    // set every column in pairs equal to zero
    for (let row = 0; row < array.length; row++) {
      array[row][pair[1]] = 0;
    }
  })
}
