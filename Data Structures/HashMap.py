
# Setting up Linked List Class to be used in Hash Map for
# seperate chaining implementation


# Linked List Node Class
class LListNode:
  def __init__ (self, key, value, nextNode):
    self.key = key
    self.value = value
    self.nextNode = nextNode

# Lined List Class
class LList:
  # Constructor
  def __init__ (self):
    self.head = None

  def set (self, key, value):
    # Check to see if the key is already in the list
    # If so then we need to update it
    ptr = self.head

    while ptr != None:
      # If it is update value, and return
      if ptr.key == key:
        ptr.value = value;
        return "Updated Key"
      ptr = ptr.nextNode

    ## Key not found so lets add it to the list
    newNode = LListNode(key, value, None)

    # If no linked list
    # Edge Case
    if self.head == None:
      self.head = newNode
    else:
      newNode.nextNode = self.head
      self.head = newNode

    return "New Key"

  def get (self, key):
    # Create pointer
    ptr = self.head
    while ptr != None:
      if ptr.key == key:
        return ptr.value
      ptr = ptr.nextNode

    # Node not found return None
    return None

  def remove (self, key):
    ptr = self.head

    ## Edge case, need to remove the head
    if (ptr.key == key):
      self.head = ptr.nextNode;
      return True;

    while (ptr.nextNode != None):
      if (ptr.nextNode.key == key):
        ptr.nextNode = ptr.nextNode.nextNode
        return True
      ptr = ptr.nextNode
    return False

  def contains (self, key):
    ptr = self.head

    while (ptr != None):
      if (ptr.key == key):
        return True
      ptr = ptr.nextNode
    return False

  def printLL (self):
    ptr = self.head
    llKeys = []

    while (ptr != None):
      llKeys.append(str(ptr.key))
      ptr = ptr.nextNode
    if len(llKeys) == 0:
      return "None"
    else:
      return " -> ".join(llKeys) + " -> None"


##################################################################
##################################################################

# Setting up HashMap class now

# Hash Function
def hashKey(key, size):
  hashedKey = 0

  if isinstance(key, str):
    for i in range(len(key)):
      hashedKey += ord(key[i])
    return hashedKey % size

  elif isinstance(key, int):
    hashedKey = key % size
    return hashedKey
  elif isinstance(key, float):
    hashedKey = int(key % size)
    return hashedKey

  return None


# HashMap Class
class HashMap:
  def __init__ (self):
    self.buckets = []
    self.bucketSize = 10
    self.count = 0;

    # Initialze all values in buckets to an empty LinkedList
    for i in range(self.bucketSize):
      self.buckets.append(LList())

  def set (self, key, value):
    hashIndex = hashKey(key, self.bucketSize)

    # Throw error if valid key not inputted
    if hashIndex == None:
      raise ValueError('Invalid data type for key in HashMap')

    insert = self.buckets[hashIndex].set(key, value)

    # Increment count only if a new key is added
    if insert == "New Key":
      self.count += 1

    # Check if we need to rehash our hashtable with a bigger bucket size
    if self.count == 2 * self.buckets:
      self.rehash()

    # return self for chaining
    return self

  def get (self, key):
    hashIndex = hashKey(key, self.bucketSize)
    return self.buckets[hashIndex].get(key)

  def isEmpty (self):
    return self.count == 0

  def size (self):
    return self.count

  def clear (self):
    self = self.__init__()

  def containsKey(self, key):
    hashIndex = hashKey(key, self.bucketSize)
    return self.buckets[hashIndex].contains(key)

  def remove(self, key):
    hashIndex = hashKey(key, self.bucketSize)
    didRemove = self.buckets[hashIndex].remove(key)

    if didRemove:
      self.count -= 1
    return didRemove;


  # Used to see how the hashmap is looking under the hood
  def printHashMap (self):
    for i in range(len(self.buckets)):
      print(i, ":", self.buckets[i].printLL())
