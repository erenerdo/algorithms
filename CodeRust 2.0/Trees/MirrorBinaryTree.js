/*

Mirror binary tree nodes
Given the root node of a binary tree, swap the 'left' and 'right' children for each node.

*/

var invertTree = function(treeNode) {
  // Edge and Base Cases
  if (!treeNode || (!treeNode.left && !treeNode.right) ) return treeNode;

  // DFS
  invertTree(treeNode.left);
  invertTree(treeNode.right);

  // Swap children
  let temp = treeNode.left;
  treeNode.left = treeNode.right;
  treeNode.right = temp;

  return treeNode;
};
