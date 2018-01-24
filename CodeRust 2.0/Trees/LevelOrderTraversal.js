/*
Level Order Traversal of Binary Tree
Given root of a binary tree, display node values at each level. Node values for all levels should be displayed on separate lines.
*/

var levelOrder = function(root) {
  // Edge Case
  if (!root) return [];
  const queue = [];
  queue.push(root);
  let levelCount = 1;
  const levels = [];

  while (queue.length) {
    let nextLevelCount = 0;
    const levelElements = [];

    while (levelCount > 0) {
        let curNode = queue.shift();
        levelCount--;
        if (curNode.left) {
          queue.push(curNode.left);
          nextLevelCount++;
        }
        if (curNode.right) {
          queue.push(curNode.right);
          nextLevelCount++;
        }
        levelElements.push(curNode.val);
    }
    levels.push(levelElements);
    levelCount = nextLevelCount;
  }
  return levels;

};
