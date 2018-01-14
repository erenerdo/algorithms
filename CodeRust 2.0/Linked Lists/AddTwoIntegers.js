var addTwoNumbers = function(l1, l2) {
  // Edge Cases
  if (l1 === null && l2) return l2;
  else if (l2 === null && l1) return l1;
  else if (!l1 && !l2) return null;

  let ptr1 = l1;
  let ptr2 = l2;
  let sum = ptr1.val + ptr2.val;
  let carry = sum >= 10 ? 1 : 0;

  let sumHead = new ListNode(sum % 10);
  let ptrSum = sumHead;
  ptr1 = ptr1.next;
  ptr2 = ptr2.next;

  while (ptr1 !== null || ptr2 !== null || carry) {
    let val1 = ptr1 ? ptr1.val : 0;
    let val2 = ptr2 ? ptr2.val : 0;
    sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;

    ptrSum.next = new ListNode(sum % 10);
    ptrSum = ptrSum.next;

    if (ptr1) ptr1 = ptr1.next;
    if (ptr2) ptr2 = ptr2.next;
  }

  return sumHead;
};
