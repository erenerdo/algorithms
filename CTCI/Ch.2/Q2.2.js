/*

Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

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
