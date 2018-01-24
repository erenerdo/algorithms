/*

Is Binary Search Tree?
Given a binary tree, figure out whether it's a BST.

Description
Given a Binary Tree figure out whether it's a Binary Search Tree. A binary search tree holds the property that each node's key value is smaller than the key value of all nodes in the right subtree and greater than the key values of all nodes in the left subtree i.e. L < N < R.

*/
function isValidBST(tree, minVal = -Infinity, maxVal = Infinity) {

	if (!tree) return true;

  if (tree.val >= maxVal || tree.val <= minVal) return false;

  return isValidBST(tree.left, minVal, Math.min(maxVal, tree.val)) &&
         isValidBST(tree.right, Math.max(minVal, tree.val), maxVal);
}
