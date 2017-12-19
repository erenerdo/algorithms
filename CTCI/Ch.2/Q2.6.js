/*

2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

Steps:
- Iterate to the middle of the list using a runner and walker
- When the middle is found, reverse the second half of the linkedlist
- Check if the values are the same by iterating through

*/

// O(n) time | O(1) memory
function isPalindromeLL (head) {
  let run = head.next;
  let walk = head;

  while (run !== null && run.next !== null) {
      run = run.next.next;
      walk = walk.next;
  }

  let middle = walk;

  // Reverse the right half of the linkedlist
  middle.next = reverseLL(middle.next);

  // Create new pointer at start of the LL
  let start = head;
  middle = middle.next;

  while (middle !== null) {
      if (start.value !== middle.value) return false;
      middle = middle.next;
      start = start.next;
  }

  return true;
}



let link1 = arrToLL(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']); // false
let link2 = arrToLL(['a', 'b', 'c', 'c', 'b', 'a']); // true
let link3 = arrToLL(['a', 'b', 'c', 'd', 'c', 'b', 'a']); // true
let link4 = arrToLL(['a', 'b', 'd', 'b', 'f']); // false
let link5 = arrToLL(['a']); // true


printLL(link1);
printLL(link2);
printLL(link3);
printLL(link4);
printLL(link5);

console.log('');

console.log(isPalindromeLL(link1));
console.log(isPalindromeLL(link2));
console.log(isPalindromeLL(link3));
console.log(isPalindromeLL(link4));
console.log(isPalindromeLL(link5));

console.log('');

printLL(link1);
printLL(link2);
printLL(link3);
printLL(link4);
printLL(link5);


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
