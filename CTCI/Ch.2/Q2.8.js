/*
Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
as to make a loop in the linked list.
EXAMPLE
Input: A -> B -> C - > D -> E -> C [the same C as earlier)
Output: C
*/

function findLoop(head) {
  let run = head;
	let walk = head;

	while (run !== null && run.next !== null) {
		run = run.next.next;
		walk = walk.next;
		if (run === walk) break;
	}

	if (run === null || run.next === null) return null;

	let start = head;

	while (start !== walk) {
		start = start.next;
		walk = walk.next;
	}

	return walk;
}
