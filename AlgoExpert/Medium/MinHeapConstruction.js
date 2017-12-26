/*

Min Heap Construction

Implement a Min Heap class. The class should support insertion, removal (of the minimum / root value), peeking (of the minimum / root value), as well as sifting a value up and down the heap and building the heap from an input array. The heap should be represented in the form of an array.

Sample input: [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
-> buildHeap(array)
-> insert(76)
-> remove()
-> remove()
-> insert(87)
Sample output:
-> [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41]
-> [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41, 76]
-> [2, 7, 6, 24, 8, 8, 24, 391, 76, 56, 12, 24, 48, 41]
-> [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48]
-> [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48, 87]

*/
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    // Do not edit the line below.
    this.heap = this.buildHeap(array);
  }
  buildHeap(array) {
    for (let i = array.length - 1; i >= 0 ; i--) {
			this.siftDown(array, i);
		}
		return array;
	}
  siftDown(array, idx) {
		// Get children indexes
    let firstChild = this.getFirstChild(idx);
		let secondChild = this.getSecondChild(idx);

		// No children case, leaf
		if (!array[firstChild] && !array[secondChild]) return;

		// One child case
		if (array[firstChild] && !array[secondChild]) {
			if (array[firstChild] <= array[idx]) {
				this.swap(array, idx, firstChild);
				this.siftDown(array, firstChild);
			}
			return;
		}

		// Two children case
		// Find min child
		let minChild = array[firstChild] < array[secondChild] ? firstChild : secondChild;
		// Check if they need to be swapped
		if (array[minChild] < array[idx]) {
			this.swap(array, minChild, idx);
			this.siftDown(array, minChild);
		}
  }

  siftUp(array, idx) {
    let parentIdx = this.getParentIdx(idx);
		if (array[idx] < array[parentIdx]) {
			this.swap(array, parentIdx, idx);
			this.siftUp(array, parentIdx);
		}
  }

  peek() {
		return this.heap[0];
	}

  remove() {
   	let popped = this.heap.pop();
		let min = this.heap[0];
		this.heap[0] = popped;
		this.siftDown(this.heap, 0);
		return min;
  }

  insert(value) {
    this.heap.push(value);
		this.siftUp(this.heap, this.heap.length - 1);
  }
	getParentIdx(idx) {
		return Math.floor((idx - 1)/2);
	}
	getFirstChild(idx) {
		return 2 * idx + 1;
	}
	getSecondChild(idx) {
		return 2 * idx + 2;
	}
	swap(array, idx1, idx2) {
		let temp = array[idx1];
		array[idx1] = array[idx2];
		array[idx2] = temp;
	}
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
