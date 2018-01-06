// Linked List Node
class LListNode {
  constructor (key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

// Linked List Class
class LList {

  constructor() {
    this.head = null;
  }

  set (key, value) {

    let newNode = new LListNode(key, value, null);

    // If no linked list
    // Edge Case
    if (this.head === null) {
      this.head = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;

    return this; // for chaining; do not edit
  }

  get (key) {
    // Edge case
    if (this.head === null) {
      return null;
    }
    // Create pointer
    let ptr = this.head;

    while (ptr !== null) {
      if (ptr.key === key) {
        return ptr.value;
      }
      ptr = ptr.next;
    }
    return undefined;
  }
}


//-----------------------------------------
// Hash tables


// Dynamic hash table so have to
function hash (key) {
  //
  if (typeof key === 'string') {
    var hashedKey = 0;
  for (var i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
  }
}

class HashTable {
  constructor () {
    this.buckets = new Array(20);

    // Inititalize all values in buckets to empty LL
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new LList();
    }
  }
  set (key, value) {
    let hashIndex = hash(key);
    this.buckets[hashIndex].set(key, value);

    return this; // for chaining, do not edit
  }
  get (key) {
    let hashIndex = hash(key);
    // Get A list
    return this.buckets[hashIndex].get(key);
  }
}
