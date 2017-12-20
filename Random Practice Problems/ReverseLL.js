/*

Write a function to reverse a linked list in O(N) time and O(1) space

*/

function reverseLL(headOfList) {
  var current  = headOfList;
  var previous = null;
  var nextNode = null;

  // until we have 'fallen off' the end of the list
  while (current) {

      // copy a pointer to the next element
      // before we overwrite current.next
      nextNode = current.next;

      // reverse the 'next' pointer
      current.next = previous;

      // step forward in the list
      previous = current;
      current = nextNode;
  }

  return previous;
}

let link1 = arrToLL([1, 2, 3, 4, 5, 6, 7, 8, 9])
let link2 = arrToLL([1, 2, 3, 4, 5, 6])
let link3 = arrToLL([1, 2, 3, 4])
let link4 = arrToLL([1, 2, 3])
let link5 = arrToLL([1, 2])
let link6 = arrToLL([1])


console.log(reverseLL('poop'))
console.log(reverseLL(null))
printLL(reverseLL(link6));
printLL(reverseLL(link5));
printLL(reverseLL(link4));
printLL(reverseLL(link3));
printLL(reverseLL(link2));
printLL(reverseLL(link1));





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
