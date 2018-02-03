/**
 Inorder successor of a node in binary Search Tree (BST) is the next node in inorder traversal. Write a method to find the inorder successor of a given value "d" in a BST.


 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var inorderSuccessor = function(root, p) {
  if (!root) return null;
  let minSuccessor = null;

  while (root && root !== p) {

    if (root.val > p.val && (!minSuccessor || root.val <= minSuccessor.val) ){
        minSuccessor = root;
    }

    if (p.val < root.val) {
      root = root.left;
    }
    else {
      root = root.right;
    }
  }

  if (!root) return null;
  if (root.right) return minChild(root.right);
  return minSuccessor;
};

function minChild (root) {
  if (!root) return null;

  while (root.left !== null) {
    root = root.left;
  }

  return root;
}
