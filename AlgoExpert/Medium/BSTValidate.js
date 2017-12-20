/*

Validate BST

You are given a Binary Tree data structure consisting of Binary Tree nodes. Each Binary Tree node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value. Write a function that returns a boolean representing whether or not the Binary Tree is a valid BST. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values.

Sample input:
            10
          /   \
        5     15
      /  \   /  \
    2    5 13   22
  /               \
1                 14
Sample output: True

*/

function validateBst(tree, minVal = -Infinity, maxVal = Infinity) {

	// Base Case
	if (tree === null) return true;

	// Check if it's valid
	if (tree.value < minVal || tree.value >= maxVal) return false;

	return validateBst(tree.left, minVal, tree.value) && validateBst(tree.right, tree.value, maxVal);
}

// Do not edit the line below.
exports.validateBst = validateBst;
