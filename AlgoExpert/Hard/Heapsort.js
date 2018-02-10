function heapSort(arr) {
  buildHeap(arr);
  let len = arr.length;
  while (len > 1) {
    swap(arr, 0, len - 1);
    len--;
    siftDown(arr, 0, len);
  }
  return arr;
}

function buildHeap (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    siftDown(arr, i, arr.length);
  }
}

function siftDown(arr, i, len) {
  const lCIdx = getLC(i);
  const rCIdx = getRC(i);

  // Leaf
  if (lCIdx >= len && rCIdx >= len) return;

  // One child
  if (lCIdx < len && rCIdx >= len) {
    if (arr[i] < arr[lCIdx]) {
      swap(arr, i , lCIdx);
    }
    return;
  }

  // Two children
  const maxCIdx = arr[lCIdx] > arr[rCIdx] ? lCIdx : rCIdx;

  if (arr[i] < arr[maxCIdx]) {
    swap(arr, i, maxCIdx);
    siftDown(arr, maxCIdx, len);
  }
}

function getLC(i) {
  return 2 * i + 1;
}

function getRC(i) {
  return 2 * i + 2;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
