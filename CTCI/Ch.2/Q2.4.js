/*

Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.
EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (partition = 5)
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

*/

// O(N) time, O(1) memory
function partitionLL (head, partVal) {
  let ptr = head;

  // Find left head
  let leftHead = null;

  while (ptr.value >= partVal) {
    ptr = ptr.next;
  }
  leftHead = ptr;


  // Reset ptr
  ptr = head;

  // Find right head;
  let rightHead = null;

  while (ptr.value < partVal) {
    ptr = ptr.next;
  }
  rightHead = ptr;

  // reset ptr
  ptr = head;
  let leftPtr = leftHead;
  let rightPtr = rightHead;

  while (ptr !== null) {
    if (ptr === rightHead || ptr === leftHead) {
      ptr = ptr.next;
    }
    else if (ptr.value < partVal) {
      leftPtr.next = ptr;
      leftPtr = ptr;
      ptr = ptr.next;
    }
    else {
      rightPtr.next = ptr;
      rightPtr = ptr;
      ptr = ptr.next;
    }
  }
  leftPtr.next = rightHead;
  rightPtr.next = null;
  return leftHead;
}


// Test Cases. These should print the same if your function works correctly
printLL(arrToLL([3, 5, 8, 5, 10, 2, 1]));
console.log('Partition around 5')
printLL(partitionLL(arrToLL([3, 5, 8, 5, 10, 2, 1]), 5));

// Linked List set up, don't modify
function LLNode (value) {
    this.value = value;
    this.next = null;
}

function arrToLL(arr) {
  let head = new LLNode(arr[0]);
  let ptr = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new LLNode(arr[i]);
    ptr.next = newNode;
    ptr = ptr.next;
  }

  ptr.next = null;
  return head;
}

function printLL (head) {
  let ptr = head;
  let strToPrint = '';

  while (ptr.next !== null) {
    strToPrint += `${ptr.value} -> `;
    ptr = ptr.next;
  }

  strToPrint += ptr.value;
  console.log(strToPrint);
}
