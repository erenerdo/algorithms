/*

Swap Nth Node with Head
Given the head of a singly linked list and 'N', swap the head with Nth node. Return the head of the new linked list.

*/

function swapNthWithHead (head, n) {
  if (head === null || n <= 1) return head;

  let trail = null;
  let lead = head;
  let count = 0;

  while (count < n - 1 && lead !== null) {
    trail = lead;
    lead = lead.next;
    count++;
  }

  if (lead === null) return head.next;

  let nextNode = lead.next;
  trail.next = head;
  lead.next = head.next;
  head.next = nextNode;

  return lead;
}
