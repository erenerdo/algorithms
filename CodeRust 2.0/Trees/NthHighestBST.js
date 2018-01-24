/*

Nth Highest in BST
Find nth highest node in a Binary Search Tree(BST).

Description
We are given a Binary Search Tree(BST) and a node number n. We have to find the node with nth highest value

*/

function nthHighestBST (treeRoot, n) {
  if (!treeRoot) return null;

  let right = nthHighestBST(treeRoot.right, n);
  if (right) return right;

  n--;
  if (n === 0) return treeRoot;

  let left = nthHighestBST(treeRoot.left, n);
  if (left) return left;

  return null;
}
