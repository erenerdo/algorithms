/*
Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.
*/

class Stack {
  constructor() {
      this.stack = [];
      this.minStack = [];
  }
  pop() {
      let val = this.stack.pop();
      if (val === this.minStack[this.minStack.length - 1]) {
          this.minStack.pop();
      }
      return val;
  }
  push(val) {
      if (this.minStack.length === 0) this.minStack.push(val);
      else if (this.minStack[this.minStack.length - 1] >= val) this.minStack.push(val);
      this.stack.push(val);
  }
  peek() {
      return this.stack[this.stack.length - 1];
  }
  min() {
      return this.minStack[this.minStack.length - 1];
  }
}

let stack = new Stack();
stack.push(13);
stack.push(7);
stack.push(19);
console.log(stack.min());
stack.push(2);
stack.push(5);
console.log(stack.min());
console.log(stack.stack);
console.log(stack.minStack);
stack.pop();
stack.pop();
console.log(stack.min());
console.log(stack.stack);
console.log(stack.minStack);








