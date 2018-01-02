/*
Island Count
Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.
*/
function getNumberOfIslands(binaryMatrix) {
  let islandCount = 0;

  for (let row = 0; row < binaryMatrix.length; row++) {
    for (let col = 0; col < binaryMatrix[0].length; col++) {
      // If current element is 1, BFS
      if (binaryMatrix[row][col] == '1') {
        let n = binaryMatrix.length;
        let m = binaryMatrix[0].length;

        DFSMark(binaryMatrix, row, col, n, m)

        islandCount++;
      }
    }
  }
  return islandCount;
}

function DFSMark (matrix, r, c, n, m) {
  if (r < 0 || r >= n || c < 0 || c >= m || matrix[r][c] != '1') return;

  // Visit and mark to -1
  matrix[r][c] = '-1';

  // Top
  DFSMark(matrix, r + 1, c, n, m);
  // Right
  DFSMark(matrix, r, c + 1, n, m);
  // Bottom
  DFSMark(matrix, r - 1, c, n, m);
  // Left
  DFSMark(matrix, r, c - 1, n, m);
}

const binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ];

console.log(getNumberOfIslands(binaryMatrix));
