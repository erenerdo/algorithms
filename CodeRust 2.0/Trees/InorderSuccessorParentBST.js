/*

Inorder Successor BST with parent pointers
Inorder successor of a node in binary tree is the next node in inorder traversal. Write a method to find inorder successor of a given binary tree node in binary search tree given parent pointers

*/
function BSTNodeParent (value, parent = null) {
  this.value = value;
  this.parent = parent;
  this.left = null;
  this.right = null;
}

function inOrderSuccessorParent (target) {
  if (!target) return null;
  // If the
  if (target.right) return minChild(target.right);

  let successor = null;
  let ptr = target.parent;

  while (ptr !== null) {
    if (ptr.value > target.value) {
      if (!successor) successor = ptr;
      else if (ptr.value < successor.value) successor = ptr;
    }
    ptr = ptr.parent;
  }

  return successor;

}
