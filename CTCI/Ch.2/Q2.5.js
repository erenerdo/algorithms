/*
Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2) .That is, 617 + 295.
Output: 2 - > 1 - > 9. That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295.
Output: 9 - > 1 - > 2. That is, 912.
*/

function sumList (llHead1, llHead2) {
  let total = 0;
  let sum1 = 0;
  let sum2 = 0;
  let tens = 1;
  let ptr1 = llHead1;
  let ptr2 = llHead2;

  // Sum up list 1
  while (ptr1 !== null) {
    sum1 += ptr1.value*tens;
    tens *= 10;
    ptr1 = ptr1.next;
  }
  tens = 1;

  // Sum up list 1
  while (ptr2 !== null) {
    sum2 += ptr2.value*tens;
    tens *= 10;
    ptr2 = ptr2.next;
  }

  total = sum1 + sum2;

  return arrToLL(String(total).split(''))
}

const ll1 = arrToLL([7, 1, 6]);
const ll2 = arrToLL([5, 9, 2]);

printLL(sumList(ll1, ll2));

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
