/*
BST Traversal

You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. Write three functions that take in an empty array, traverse the BST, add its nodes' values to the input array, and return that array. The three functions should traverse the BST using the in-order traversal, pre-order traversal, and post-order traversal techniques, respectively.

Sample input:
      10
     /  \
    5    15
   / \     \
  2   5     22
 /
1
Sample output (inOrderTraverse): [1, 2, 5, 5, 10, 15, 22]
Sample output (preOrderTraverse): [10, 5, 2, 1, 5, 15, 22]
Sample output (postOrderTraverse): [1, 2, 5, 5, 22, 15, 10]
*/
function inOrderTraverse(tree, array) {
	if (!tree) return;

	inOrderTraverse(tree.left, array);
	array.push(tree.value);
	inOrderTraverse(tree.right, array);

	return array;
}

function preOrderTraverse(tree, array) {
	if (!tree) return;

	array.push(tree.value);
	preOrderTraverse(tree.left, array);
	preOrderTraverse(tree.right, array);
	return array;
}

function postOrderTraverse(tree, array) {
	if (!tree) return;

	postOrderTraverse(tree.left, array);
	postOrderTraverse(tree.right, array);
	array.push(tree.value);

	return array;
}

// Do not edit the line below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
