/*

Breadth-first Search

You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-first Search approach, stores all the of the Nodes' names in the input array, and returns it.

Sample input:
     A
   / | \
  B  C  D
 / \   / \
E   F G   H
   / \ \
  I   J K
Sample output: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]

*/

// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
		let queue = [];
		const visited = new Set();
		queue.push(this);

		while (queue.length) {
			let currentNode = queue.shift();
			array.push(currentNode.name);
			visited.add(currentNode);

			for (let i = 0; i < currentNode.children.length; i++) {
				let child = currentNode.children[i];
				if (!visited.has(child)) queue.push(child);
			}

		}
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
