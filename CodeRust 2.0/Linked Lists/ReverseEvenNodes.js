/*

Reverse even nodes
Given a singly linked list, reverse nodes at even indices.
*/

function reverseEvenNode (head) {
  // Edge Case
  if (!head || !head.next) return head;
  // Initialize ptrs
  let evenHead = head.next;
  let ptr = head;

  // Bypass even
  ptr.next = evenHead.next;
  evenHead.next = null;
  ptr = ptr.next;

  while (ptr !== null && ptr.next !== null) {
    let even = ptr.next;
    ptr.next = even.next;
    even.next = evenHead;
    evenHead = even;
    ptr = ptr.next;
  }

  let lead1 = head;
  let trail1 = null;
  let lead2 = evenHead;
  let trail2 = null;

  while (lead2 !== null && lead1 !== null) {
    trail1 = lead1;
    trail2 = lead2;
    lead1 = lead1.next;
    lead2 = lead2.next;

    trail1.next = trail2;
    trail2.next = lead1;
  }

  return head;
}
