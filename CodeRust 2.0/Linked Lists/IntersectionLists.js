function intersectionPoint (head1, head2) {
  let ptr1 = head1;
  let ptr2 = head2;
  let length1 = findLength(head1);
  let length2 = findLength(head2);

  if (length1 > length2) ptr1 = shift(ptr1, length1 - length1);
  else ptr2 = shift(ptr2, length2 - length1);

  while (ptr1 !== ptr2 && ptr1 !== null && ptr2 !== null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  if (ptr1 === ptr2 && ptr1 !== null) {
    return ptr1;
  }
  return null;
}

function shift (head, num) {
  while (num) {
    num--;
    head = head.next;
  }
  return head;
}

function findLength (head) {
  let count = 0;
  let ptr = head;

  while (ptr !== null) {
    ptr = ptr.next;
    count++;
  }

  return count;
}
