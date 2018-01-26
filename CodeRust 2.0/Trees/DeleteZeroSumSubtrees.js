function deleteZeroSumSubtree (treeRoot) {
  // Edge Case
  if (!treeRoot) return null;
  let sum = deleteZeroSumSubtree(treeRoot);
  // Entire tree sums to 0
  if (sum === 0) return null;
  // Otherwise
  return treeRoot;
}

function deleteZeroSumSubtreeHelper (treeRoot) {
  if (!treeRoot) return null;

  let leftSum = deleteZeroSumSubtreeHelper(treeRoot.left);
  let rightSum = deleteZeroSumSubtreeHelper(treeRoot.right);

  if (!leftSum) treeRoot.left = null;
  if (!rightSum) treeRoot.right = null;

  return leftSum + rightSum + treeRoot.value;
}

function TreeNode (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
