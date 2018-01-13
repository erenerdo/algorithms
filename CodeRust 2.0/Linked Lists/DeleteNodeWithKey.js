/*
Delete node with a given key
Given head of a linked list and a key, delete node with this given key from the linked list.
*/

function deleteKeyLL (head, key) {
  let current = head;
  let prev = null;

  // Iterate until we get to the end of the list or we hit the key
  while (current !== null) {
    if (current.value === key) break;
    prev = current;
    current = current.next;
  }

  // If key is in the head, delete the head;
  if (current === head) {
    head = head.next;
    return head;
  }
  // Key not found
  if (current === null) return head;
  // Key found, remove current node
  prev.next = current.next;
  return head;
}
