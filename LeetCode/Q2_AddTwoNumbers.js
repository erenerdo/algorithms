/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // Edge Cases
  if (l1 === null) return l2;
  else if (l2 === null) return l1;

  // Set up variables and first node
  let sum = l1.val + l2.val;
  let carry = sum >= 10 ? 1 : 0;

  let newHead = new ListNode(sum % 10);

  let ptr1 = l1.next;
  let ptr2 = l2.next;
  let ptrNew = newHead;

  while (ptr1 !== null || ptr2 !== null) {
    // Get Values
    let val1 = ptr1 ? ptr1.val : 0;
    let val2 = ptr2 ? ptr2.val : 0;

    // Set up summed node
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;

    ptrNew.next = new ListNode(sum % 10);

    // Move pointers
    ptrNew = ptrNew.next;
    if (ptr1) ptr1 = ptr1.next;
    if (ptr2) ptr2 = ptr2.next;

  }

  if (carry === 1) ptrNew.next = new ListNode(1);

  return newHead;

};


