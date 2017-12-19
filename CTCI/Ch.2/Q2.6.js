/*

2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

*/

function isPalindromeLL (head) {
  let ptr = head;
  let linkLVals = [];

  // Add everything to an Array
  while (ptr !== null) {
      linkLVals.push(ptr.value);
      ptr = ptr.next;
  }

  let lo = 0;
  let hi = linkLVals.length - 1;

  // check if values in the array is a palindrome
  while (lo < hi) {
      if (linkLVals[lo] !== linkLVals[hi]) {
          return false;
      }
      lo++;
      hi--;
  }
  return true;
}

let link1 = arrToLL(['a', 'b', 'c', 'd', 'e', 'f']); // false
let link2 = arrToLL(['a', 'b', 'c', 'c', 'b', 'a']); // true
let link3 = arrToLL(['a', 'b', 'd', 'b', 'f']); // false
let link4 = arrToLL(['a']); // true

console.log(isPalindromeLL(link1));
console.log(isPalindromeLL(link2));
console.log(isPalindromeLL(link3));
console.log(isPalindromeLL(link4));

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
