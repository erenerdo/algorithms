/*

Print Tree Perimeter
Given the root node of a binary tree, print nodes forming the boundary (perimeter).

*/
function printPerimeter (treeRoot) {
  // Edge Case
  if (!treeRoot) return [];

  const output = [treeRoot.val];
  printPerimeterLeft(treeRoot.left, false, output);
  printPerimeterRight(treeRoot.right, false, output);
  return output;
}

function printPerimeterLeft (treeNode, interiorFlag, output) {
  // Edge Case
  if (!treeNode) return;

  // Base Case, leaf
  if (!treeNode.left && !treeNode.right) {
    output.push(treeNode.val);
    return;
  }

  if (!interiorFlag) output.push(treeNode.val);

  // Go left and keep the flag we passed in
  printPerimeterLeft(treeNode.left, interiorFlag, output);

  // If the left subtree doesnt exist and the interior flag is false, we need to pass in the interior flag we got
  if (!treeNode.left && !interiorFlag) {
    printPerimeterLeft(treeNode.right, interiorFlag, output)
  }
  else {
    // Go right set flag to true
    printPerimeterLeft(treeNode.right, true, output);
  }
}

function printPerimeterRight (treeNode, interiorFlag, output) {
  // Edge Case
  if (!treeNode) return;

  // Base Case, leaf
  if (!treeNode.left && !treeNode.right) {
    output.push(treeNode.val);
    return;
  }
  // If the right subtree doesnt exist and the interior flag is false, we need to pass in the interior flag we got
  if (!treeNode.right && !interiorFlag) {
    printPerimeterRight(treeNode.left, interiorFlag, output);
  }
  else {
    // Go left and set flag to true
    printPerimeterRight(treeNode.left, true, output);
  }

  // Go right and keep the flag we passed in
  printPerimeterRight(treeNode.right, interiorFlag, output);

  if (!interiorFlag) output.push(treeNode.val);
}
