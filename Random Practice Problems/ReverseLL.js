/*

Write a function to reverse a linked list in O(N) time and O(1) space

*/

function reverseLL (head) {
  // Edge cases

  // Bad input
  if (typeof head !== 'object' || head === null) return null;

  // One element
  if (head.next === null) return head;

  // Two elements
  if (head.next.next === null) {
      let temp = head.next;
      temp.next = head;
      head.next = null;
      return temp;
  }

  // Normal cases
  let trail = head;
  let middle = head.next;
  let lead = head.next.next;

  // Initialize
  trail.next = null;

  while (lead !== null) {
      // Reassign pointer
      middle.next = trail;

      // Adjust pointers
      trail = middle;
      middle = lead;
      lead = lead.next;
  }

  middle.next = trail;
  return middle;
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

while (ptr.next !== null) {
strToPrint += `${ptr.value} -> `;
ptr = ptr.next;
}

strToPrint += ptr.value;
console.log(strToPrint);
}
