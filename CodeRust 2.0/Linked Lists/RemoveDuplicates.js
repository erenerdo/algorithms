function removeDupsLL (head) {
  if (head === null) return null;
  const visited = new Set();
  let ptr = head;

  while (ptr.next !== null) {
    visited.add(ptr.value);
    if (visited.has(ptr.next.value)) {
      ptr.next = ptr.next.next;
    }
    else {
      ptr = ptr.next;
    }
  }
  return head;
}
