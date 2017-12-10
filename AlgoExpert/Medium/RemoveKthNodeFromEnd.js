/*

Remove Kth Node From End

Write a function that takes in the head of a Singly Linked List and an integer k (assume that the list has at least k nodes). The function should remove the kth node from the end of the list. Note that every node in the Singly Linked List has a "value" property storing its value as well as a "next" property pointing to the next node in the list or None (null) if it is the tail of the list.

Sample input: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9, 4
Sample output: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9

*/

function removeKthNodeFromEnd(head, k) {
	// Base Case
	if (k === 0) return head;

	let lead = head;
	let trail = head;
	let count = 0;

	while (count < k) {
		lead = lead.next;
		count++;
	}

	// Edge Case, head needs to be removed
	if (lead === null) {
		head.value = head.next.value;
    head.next = head.next.next;
    return;
	}

	// Iterate until lead is at the last node
	while (lead.next !== null) {
		lead = lead.next;
		trail = trail.next;
	}

	// By pass kth node
	trail.next = trail.next.next;

	return head;
}

exports.removeKthNodeFromEnd = removeKthNodeFromEnd;


exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
