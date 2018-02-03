function NaryNode (val) {
  this.val = val;
  this.children = [];
  this.left = null;
  this.right = null;
}


let n1 = new NaryNode(1);
let n2 = new NaryNode(2);
let n3 = new NaryNode(3);
let n4 = new NaryNode(4);
let n5 = new NaryNode(5);
let n6 = new NaryNode(6);
let n7 = new NaryNode(7);

n1.children.push(n2, n3, n4);
n3.children.push(n5, n6);
n5.children.push(n7);

printNary(n1);

function printNary(root) {
  const queue = [root];
  let level = 1;

  while (queue.length) {
    const levelArr = [];

      while (level) {
        const node = queue.shift();
        // Add all it's children to the queue
        for (let i = 0; i < node.children.length; i++) {
          queue.push(node.children[i]);
        }
        levelArr.push(node.val);
        level--;
      }
      level = queue.length;

      console.log(levelArr);
  }
}

function convertToBinTree (root, path = 'left') {
  // Edge Cases
  if (root === null) return null;


  let ptr = root;

  while (root.children.length) {
    const curChild = root.children.shift();
    ptr[path] = curChild;

    if (curChild.children.length) {
      const childPath = flipPath(path);
      convertToBinTree(curChild, childPath);
    }
    ptr = curChild;
  }
  return root;
}

function flipPath (path) {
  if (path === 'left') return 'right';
  else return 'left';
}

function inOrder (root) {
  if (!root) return
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}

console.log('')
convertToBinTree(n1);

inOrder(n1)
console.log('')


function convertToNaryTree (root, path = 'left') {
  const children = [];
  let ptr = root[path];
  root[path] = null;

  while (ptr) {
    children.push(ptr);
    if (ptr[flipPath(path)]) {
      convertToNaryTree(ptr, flipPath(path));
    }
    const next = ptr[path];
    ptr[path] = null;
    ptr = next;
  }
  root.children = children;
}

convertToNaryTree(n1)


printNary(n1);









