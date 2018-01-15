/*

Reverse a singly linked list
Given the pointer/reference to the head of a singly linked list, reverse it and return the pointer/reference to the head of reversed linked list.

*/

var reverseList = function(head) {
  let trail = null;
  let lead = head;

  while (lead !== null) {
    let nextNode = lead.next;
    lead.next = trail
    trail = lead;
    lead = nextNode;
  }
  return trail;
};
