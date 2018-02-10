/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3
*/

/*

BFS Solution

 */
var numIslands = function(binaryMatrix) {
  let islandCount = 0;

   for (let row = 0; row < binaryMatrix.length; row++) {
     for (let col = 0; col < binaryMatrix[0].length; col++) {
       // If current element is 1, BFS
       if (binaryMatrix[row][col] === '1') {
         const queueBFS = [];

         // Add indexes to queueBFS
         queueBFS.push([row, col]);

         // While queue isn't empty, visit BFS and mark adjacent islands
         while (queueBFS.length) {

           const visit = queueBFS.shift();
           const r = visit[0];
           const c = visit[1]

           binaryMatrix[r][c] = -1;

           // Check Top, Right, Bottom, Left
           // Top
           BFSMark(binaryMatrix, r + 1, c, queueBFS);
           // Right
           BFSMark(binaryMatrix, r, c + 1, queueBFS);
           // Bottom
           BFSMark(binaryMatrix, r - 1, c, queueBFS);
           // Left
           BFSMark(binaryMatrix, r, c - 1, queueBFS);

         }

         islandCount++;
       }
     }
   }
   return islandCount;
 }

 function BFSMark (matrix, row, col, queue) {
   let n = matrix.length;
   let m = matrix[0].length;
   if (row < 0 || row >= n || col < 0 || col >= m || matrix[row][col] != '1') return;
   queue.push([row, col]);
 }

 /*

 DFS Solution

 */

var numIslands = function(binaryMatrix) {
  let islandCount = 0;

   for (let row = 0; row < binaryMatrix.length; row++) {
     for (let col = 0; col < binaryMatrix[0].length; col++) {
       // If current element is 1, BFS
       if (binaryMatrix[row][col] == '1') {
         let n = binaryMatrix.length;
         let m = binaryMatrix[0].length;
         DFSMark(binaryMatrix, row, col, n, m);
         islandCount++;
       }
     }
   }
   console.log(binaryMatrix)
   return islandCount;
 }

 function DFSMark (matrix, r, c, n, m) {
   if (r < 0 || r >= n || c < 0 || c >= m || !matrix[r].length || matrix[r][c] !== '1') return;

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
