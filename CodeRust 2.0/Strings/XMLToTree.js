/*

XML to Tree
Convert an XML string to an n-ary tree.

Description
Given a valid XML document, read it in a tree structure.

*/

let XMLStr = `<html>
  <body>
    <div>
      <h1>CodeRust</h1>
      <a>http://coderust.com</a>
    </div>
    <div>
        <h2>Chapter 1</h2>
    </div>
    <div>
        <h3>Chapter 2</h3>
        <h4>Chapter 2.1</h4>
    </div>
  </body>
</html>`;

let XMLTree = XMLToTree(XMLStr);

let queue = [XMLTree];

// BFS the tree to see if it is correct
while (queue.length) {
  let element = queue.shift();
  for (let i = 0; i < element.children.length; i++) {
    queue.push(element.children[i]);
  }
  console.log(element);
  console.log('\n');
}

function XMLToTree (XMLStr) {
  const stack = [];

  for (let i = 0; i < XMLStr.length; i++) {
    // White space
    if (XMLStr[i] === ' ' || XMLStr[i] === '\n') continue;
    // Opening tag
    else if (XMLStr[i] === '<' && XMLStr[i + 1] !== '/') {
      let j = i;
      while (XMLStr[j] !== '>') j++;
      let tag = XMLStr.slice(i + 1, j);
      let openTag = new NaryNode(tag, true);
      stack.push(openTag);
      i = j;
    }
    // Closing tag
    else if (XMLStr[i] === '<' && XMLStr[i + 1] === '/') {
      let children = [];
      while (stack.length && !stack[stack.length - 1].openTag) {
        children.push(stack.pop());
      }
      stack[stack.length - 1].children = children;
      stack[stack.length - 1].openTag = false;
      while (XMLStr[i] !== '>') i++;
    }
    // Text
    else {
      let j = i;
      while (XMLStr[j] !== '<') j++;
      let text = XMLStr.slice(i, j);
      let textNode = new NaryNode(text);
      stack.push(textNode);
      i = j - 1;
    }
  }

  return stack[stack.length - 1];
}

function NaryNode (contents, openTag = false) {
  this.openTag = openTag;
  this.contents = contents;
  this.children = [];
}

