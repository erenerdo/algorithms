
/*
BST Construction

Write a Binary Search Tree (BST) class. The BST class should have a "value" property set to be an integer, as well as "left" and "right" properties, both of which should point to either the None (null) value or to another BST. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. The BST class should support insertion, searching, and removal of values. The removal method should only remove the first instance of the target value.

Sample input:
       10
     /    \
    5      15
   / \    /  \
  2   5 13    22
 /        \
1          14
Sample output (after inserting 12):
      10
    /    \
   5      15
  / \    /  \
 2   5 13    22
/     /  \
1     12   14
Sample output (after removing 10):
      12
    /    \
   5      15
  / \    /  \
 2   5 13    22
/        \
1          14
Sample output (after searching for 15): True

*/

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    const direction = this.value > value ? 'left' : 'right';

    if (direction === 'left' && !this.left) {
      this.left = new BST(value);
    }
    else if (direction === 'right' && !this.right) {
      this.right = new BST(value);
    }
    else {
      direction === 'left' ? this.left.insert(value) : this.right.insert(value);
    }

    return this;
  }

  contains(value) {
    // Write your code here.
    if (this.value === value) return true;

    const direction = this.value > value ? 'left' : 'right';

    if (this[direction]) return this[direction].contains(value);
    else return false;

  }

  remove(value) {

		// Edge case
		// If we need to delete the root
		if (this.value === value) {
			 // Look for lowest value on the right subtree
      let lowest = this.right;

			// If there is no right subtree from root, return left subtree
			if (lowest === null) {
				return this.left;
			}

      while (lowest.left) {
        lowest = lowest.left;
      }
      // Lowest value found copy value into lead
      this.value = lowest.value;
			// Delete lowest from the right subtree recursively
      this.right.remove(lowest.value);
			return this;
		}

			// Set up lead and follow pointers
    let lead = this.value > value ? this.left : this.right;
    let follow = this;


		// Look for node to delete
    while (lead !== null && lead.value !== value) {
      follow = lead;
      if (value < lead.value) lead = lead.left;
      else lead = lead.right;
    }

    // Check how many children lead pointer has

    // No children
    if (lead.right === null && lead.left === null) {
      value < follow.value ? follow.left = null : follow.right = null;
    }

    // One child on the right
    else if (lead.right && lead.left === null) {
      value < follow.value ? follow.left = lead.right : follow.right = lead.right;
    }
		// One child on the left
    else if (lead.left && lead.right === null) {
      value < follow.value ? follow.left = lead.left : follow.right = lead.left;
    }

    // Two children
    else {
      // Look for lowest value on the right subtree
      let lowest = lead.right;
      while (lowest.left) {
        lowest = lowest.left;
      }
      // Lowest value found copy value into lead
      lead.value = lowest.value;
			// Delete lowest from the right subtree recursively
      lead.right.remove(lead.value);
    }
    return this;

  }
}

// Do not edit the line below.
exports.BST = BST;

