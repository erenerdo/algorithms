/*
Connect All Siblings
Given the root to a binary tree where each node has an additional pointer called sibling (or next), connect the sibling pointer to next node in the same level. Last node in each level should point to the first node of next level in the tree.
*/

function connectSiblings (treeRoot) {
  let cL = treeRoot;
  let nL = getLeftMostChild(cL);

  while (nL) { // For each level
    let ptr = cL;
    let trail = null;

    while (ptr) { // For each node in the level

      if (ptr.left) {
        if (ptr.right) ptr.left.next = ptr.right;
        else ptr.left.next = getLeftMostChild(ptr.next);
      }
      else if (ptr.right) {
        ptr.right.next = getLeftMostChild(ptr.next);
      }
      trail = ptr;
      ptr = ptr.next;
    }
    trail.next = nL;
    cL = nL;
    nL = getLeftMostChild(nL);

  }
}

function getLeftMostChild(ptr) {
  if (!ptr) return null;

  while (ptr) {
    if (ptr.left) return ptr.left;
    else if (ptr.right) return ptr.right;
    ptr = ptr.next;
  }
  return null;
}



