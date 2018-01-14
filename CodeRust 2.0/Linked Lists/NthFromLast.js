
/*
Nth from last node
Given a singly linked list, return nth from last node. Return null if 'n' is out-of-bounds.
*/

function nthFromLast (head, n) {
  let trail = head;
  let lead = head;
  let counter = 0;

  while (counter < n && lead !== null) {
    lead = lead.next;
    counter++;
  }

  if (counter < n && lead === null) return null;

  while (lead !== null) {
    lead = lead.next;
    trail = trail.next;
  }

  return trail;
}
