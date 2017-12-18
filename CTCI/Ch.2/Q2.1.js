/*

Remove Dups: Write code to remove duplicates from an unsorted linked list.
Return the head of the linked list after removing duplicates

*/

function removeDupsLL(head) {
  // Write your code here

  // Keep this line for tests
  return head;
}

// Test Cases. These should print the same if your function works correctly
printLL(removeDupsLL(arrToLL([1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7])));
printLL(arrToLL([1, 2, 3, 4, 5, 6, 7]));

printLL(removeDupsLL(arrToLL([1, 1, 1])));
printLL(arrToLL([1]));

printLL(removeDupsLL(arrToLL([1, 1, 3, 5, 7, 7, 7, 2, 1, 1, 4, 5, 5, 7])));
printLL(arrToLL([1, 3, 5, 7, 2, 4]));


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
