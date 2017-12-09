/*

Depth-first Search

You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach, stores all the of the Nodes' names in the input array, and returns it.

Sample input:
     A
   / | \
  B  C  D
 / \   / \
E   F G   H
   / \ \
  I   J K
Sample output: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

*/

// Do not edit the class below except
// for the depthFirstSearch method.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
		// Add array node to array
		array.push(this.name);

		// Visit all children of node
		this.children.forEach(child => {
			child.depthFirstSearch(array);
		});

		// return array
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
