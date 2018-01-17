function mergesort (arr) {
  // Edge Case
  if (!arr) return null;
  // Base Case
  if (arr.length <= 1) return arr;

  // Get mid index
  let midIdx = Math.floor(arr.length / 2);
  // Get left half
  let leftArr = arr.slice(0, midIdx);
  // Get right half
  let rightArr = arr.slice(midIdx);

  // Sort left and right half recursively
  leftArr = mergesort(leftArr);
  rightArr = mergesort(rightArr);

  // Merge the returned sorted halfs
  return merge(leftArr, rightArr);
}


function merge (arr1, arr2) {
  // Edge Case
  if (!arr1 && !arr2) return [];
  else if (arr1 && !arr2) return arr1;
  else if (!arr1 && arr2) return arr2;

  // Initialze mergedArr
  const mergedArr = new Array(arr1.length + arr2.length).fill(null);

  // Index for arr1
  let idx1 = 0;
  // Index for arr2
  let idx2 = 0;
  // Index for mergedArr
  let idxM = 0;

  while (idx1 < arr1.length || idx2 < arr2.length) {
    let val1 = arr1[idx1] ? arr1[idx1] : Infinity;
    let val2 = arr2[idx2] ? arr2[idx2] : Infinity;

    if (val1 <= val2) {
      mergedArr[idxM] = val1;
      idxM++;
      idx1++;
    }
    else {
      mergedArr[idxM] = val2;
      idxM++;
      idx2++;
    }
  }

  return mergedArr;
}
