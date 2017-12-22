/*

Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

*/


// Interseting LL Set Up
let LL1 = arrToLL([1, 2, 3, 4, 5, 6]);
let LL2 = arrToLL([10, 12, 7, 8, 9]);
let LL3 = arrToLL([14, 15, 16]);

let tail2 = LL2;

while (tail2.next !== null) {
    tail2 = tail2.next;
}

let middle1 = LL1.next.next.next;
tail2.next = middle1;

printLL(LL1);
printLL(LL2);
printLL(LL3);
console.log('');

// O(N) time | O(1) space
function LLInterset(head1, head2) {
    let ptr1 = head1;
    let ptr2 = head2;

    let length1 = findLengthLL(head1);
    let length2 = findLengthLL(head2);

    if (length1 > length2) {
        ptr1 = adjustPtr(ptr1, length1 - length2);
    }
    else if (length1 < length2) {
        ptr2 = adjustPtr(ptr2, length2 - length1);
    }

    while (ptr1 !== null && ptr2 !== null) {
        if (ptr1 === ptr2) {
            return ptr1;
        }
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return null;
}

console.log('LL1 and LL2:', LLInterset(LL1, LL2)); // Should return node 4
console.log('LL3 and LL2:', LLInterset(LL3, LL2)); // Should return null

// Helper functions
function adjustPtr(ptr, moves) {
    while(moves > 0) {
        ptr = ptr.next;
        moves--;
    }
    return ptr;
}

function findLengthLL (head) {
    let count = 0;

    while (head !== null) {
        head = head.next;
        count++;
    }
    return count;
}

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

  while (ptr !== null) {
  strToPrint += `${ptr.value} -> `;
  ptr = ptr.next;
  }

  strToPrint += 'null';
  console.log(strToPrint);
  }
