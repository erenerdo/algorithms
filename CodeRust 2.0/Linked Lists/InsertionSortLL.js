/*

Insertion Sort of a Linked List
Given head pointer of a linked list, sort it in ascending order using insertion sort.

*/

var insertionSortList = function(head) {
  // Edge Case
  if (!head) return null;

  let sortedHead = head;
  let ptr = head.next;
  sortedHead.next = null

  while (ptr) {
    let nextPtr = ptr.next;
    if (ptr.val < sortedHead.val) {
      ptr.next = sortedHead;
      sortedHead = ptr;
      ptr = nextPtr;
      continue;
    }

    let ptrS = sortedHead;
    while (ptrS.next && ptrS.next.val < ptr.val) {
      ptrS = ptrS.next;
    }

    ptr.next = ptrS.next;
    ptrS.next = ptr;
    ptr = nextPtr;
  }

  return sortedHead;
};
