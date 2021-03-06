/*
Search in a Matrix
Search (find position of) a given key in 2D matrix. All rows and columns are sorted.
*/
function searchMatrix(matrix, target) {
  // Edge Case
  if (!matrix || !matrix.length) return false;

  let row = 0;
  let col = matrix[0].length - 1;
  let rows = matrix.length;

  while (row < rows && col >= 0) {
    if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
    else return true;
  }
  return false;
}
