/*

Given a linkedList and a int k, reverse all nodes in the linkedList that are multiples of k. You may not alter the values in the nodes, only nodes itself may be changed. Only constant memory is allowed. For example, Given this linked list: 1->2->3->4->5 For k = 2, you should return: 2->1->4->3->5

  return the head of the linked list after reversing
*/

function reverseLLK(head, k) {

    // Edge Cases

    // Empty list passed in
    if (head === null) return null;

    // Only one node, return it
    if (head.next === null) return head;


    // if list is only 2 nodes long
    if (head.next.next === null) {
      // if second value is a multiple of k
      if (head.next.value % k === 0) {
        let newHead = head.next;
        head.next = null;
        newHead.next = head;
        return newHead;
      }
    }

    // Make pointers at head, second, and third nodes
    let lead = head.next.next;
    let middle = head.next;
    let trail = head;

    // Additional edge case
    // Check if second value needs to be reversed and theres more than or equal to 3 values
    if (middle.value % k === 0) {

      // Shift around pointers
      middle.next = trail;
      trail.next = lead;
      head = middle;

      // Get pointers in right position to start while loop
      trail = head;
      middle = head.next;
      lead = middle.next;
    }

    while (lead !== null) {
      if (lead.value % k === 0) {
        // Reverse the lead pointer keeping the ordering correct
        middle.next = lead.next;
        trail.next = lead;
        lead.next = middle;

        // Shift pointer to correct positions for next iteration
        trail = lead;
        lead = middle.next;
      }
      else {
        // Just move pointers down one
        trail = middle;
        middle = lead;
        lead = lead.next;
      }
    }

    return head;
  }


  // Tests
  printLL(reverseLLK(arrToLL([2]), 2));
  printLL(arrToLL([2]));

  console.log('');

  printLL(reverseLLK(arrToLL([1, 2]), 2));
  printLL(arrToLL([2, 1]));

  console.log('');

  printLL(reverseLLK(arrToLL([1, 2, 3, 4, 5]), 2));
  printLL(arrToLL([2, 1, 4, 3, 5]));

  console.log('');

  printLL(reverseLLK(arrToLL([1, 2, 3, 4, 5, 6, 7, 8]), 2));
  printLL(arrToLL([2, 1, 4, 3, 6, 5, 8, 7]));


  // Linked List set up
  function LLNode (value) {
      this.value = value;
      this.next = null;
  }

  function arrToLL(arr) {
    let head = new LLNode(arr[0]);
    let ptr = head;

    for (let i = 1; i < arr.length; i++) {
      let newNode = new LLNode(arr[i]);
      ptr.next = newNode;
      ptr = ptr.next;
    }

    ptr.next = null;
    return head;
  }

  function printLL (head) {
    let ptr = head;
    let strToPrint = '';

    while (ptr !== null) {
      strToPrint += `${ptr.value} -> `;
      ptr = ptr.next;
    }

    strToPrint += null;
    console.log(strToPrint);
  }
