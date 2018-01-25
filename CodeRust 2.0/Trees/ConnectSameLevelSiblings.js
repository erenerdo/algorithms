/*

Connect Same Level Siblings
Given a binary tree, connect its siblings at each level.

 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  // Edge Case
  if (!root) return;

  let levelStart = root;

  while (levelStart) {
    let ptr = levelStart;

    while (ptr) {
      // Check left
      if (ptr.left) {
        if (ptr.right) {
          ptr.left.next = ptr.right;
        }
        else {
          ptr = linkNextNode(ptr.next, ptr.left);
          continue;
        }
      }
      // Check right
      if (ptr.right) {
        ptr = linkNextNode(ptr.next, ptr.right);
        continue;
      }
      ptr = ptr.next;
    }
    levelStart = getNextLevelStart(levelStart);
  }
};

function getNextLevelStart (ptr) {
  // Edge Case
  if (!ptr) return null;

  while (ptr) {
    if (ptr.left) return ptr.left;
    else if (ptr.right) return ptr.right;
    ptr = ptr.next;
  }
  return null;
}

function linkNextNode(ptr, nodeToLink) {
  // Edge Case
  if (!ptr) return null;

  while (ptr) {
    if (ptr.left) {
      nodeToLink.next = ptr.left;
      return ptr;
    }
    else if (ptr.right) {
      nodeToLink.next = ptr.right;
      return ptr;
    }
    ptr = ptr.next;
  }
  return null;
}
