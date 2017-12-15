/*

Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
that node.
EXAMPLE
Input: the node c from the linked list a - >b- >c - >d - >e- >f
Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f

*/

const headNode = arrToLL(['a', 'b', 'c', 'd', 'e', 'f']);
const middleNode = headNode.next.next;


function deleteMiddle(node) {

  // Copy the value from the node next to the right of Iterator
  node.value = node.next.value;

  // Reassign the pointer
  node.next = node.next.next;
}

deleteMiddle(middleNode);

printLL(headNode);
printLL(arrToLL(['a', 'b', 'd', 'e', 'f']));


// Linked List set up
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
