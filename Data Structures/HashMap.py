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
        return self
      ptr = ptr.nextNode

    ## Key not found so lets add it to the list
    newNode = LListNode(key, value, None)

    # If no linked list
    # Edge Case
    if self.head == None:
      self.head = newNode
      return self

    newNode.nextNode = self.head
    self.head = newNode
    return self

  def get (self, key):

    # Create pointer
    ptr = self.head
    while ptr != None:
      if ptr.key == key:
        return ptr.value
      ptr = ptr.nextNode

    # Node not found return None
    return None


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


# HashMap class
class HashMap:
  def __init__ (self):
    self.buckets = []
    # Initialze size of buckets to 10
    self.size = 10

    # Initialze all values in buckets to an empty LinkedList
    for i in range(self.size):
      self.buckets.append(LList())

  def set (self, key, value):
    hashIndex = hashKey(key, self.size)
    if hashIndex == None:
      raise ValueError('Invalid data type for key in HashMap')
    self.buckets[hashIndex].set(key, value)

    # return self for chaining
    return self

  def get (self, key):
    hashIndex = hashKey(key, self.size)
    return self.buckets[hashIndex].get(key)

  # Used to see how the hashmap is looking under the hood
  def printHashMap (self):
    for i in range(len(self.buckets)):
      print(i, ":", self.buckets[i].printLL())

## Driver

hMap = HashMap()

# Set values of alphabet in HashMap for testing
hMap.set('a', 1).set('b', 2).set('c', 3).set('d', 4).set('e', 5).set('f', 6)
hMap.set('g', 7).set('h', 8).set('i', 9).set('j', 10).set('k', 11).set('l', 12)
hMap.set('m', 13).set('n', 14).set('o', 15).set('p', 16).set('q', 17).set('r', 18)
hMap.set('s', 19).set('t', 20).set('u', 21).set('v', 22).set('w', 23).set('x', 24)
hMap.set('y', 25).set('z', 26)

# Print HashMap to see how it's looking
hMap.printHashMap()

# Line break for printing
print("\nChecking values for l, e, b, r, o, n, and cavs:")

# Check if the letters for lebron are returning correctly
print(hMap.get('l')) # 12 retuned and printed
print(hMap.get('e')) # 5 returned and printed
print(hMap.get('b')) # 2 returned and printed
print(hMap.get('r')) # 18 returned and printed
print(hMap.get('o')) # 15 returned and printed
print(hMap.get('n')) # 14 returned and printed

# Check to see it returns None when it should
print(hMap.get('cavs')) # None printed

# Try to set faulty data, should throw ValueError, comment out to test
# print(hMap.set({"a", 2}, "b"))

## Add numbers to hMap to see if it still works

hMap.set(1, 31)
hMap.set(2, 32)
hMap.set(3, 33)
hMap.set(4.343, 34.343)

# Line break for printing
print("")

# Print HashMap to see how it's looking
hMap.printHashMap()

# Line break for printing
print("")

# Check if numbers are returning correctly
print(hMap.get(2)) # 32 returned and printed
print(hMap.get(4.343)) # 34.343 returned and printed

# Line break for printing
print("")

# Update values and see if they change
hMap.set("a", 60)
hMap.set("z", 100)
print(hMap.get("a"))
print(hMap.get("z"))




