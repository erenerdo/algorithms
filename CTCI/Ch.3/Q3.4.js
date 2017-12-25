/*
3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
*/
class MyQueue {
  constructor() {
      this.stackA = [];
      this.stackB = [];
  }
  enqueue(val) {
      if (this.stackA.length || this.isEmpty() ) {
          this.stackA.push(val);
      } else {
          while (this.stackB.length) {
              this.stackA.push(this.stackB.pop());
          }
          this.stackA.push(val);
      }
  }
  dequeue() {
      if (this.stackA.length) {
          while (this.stackA.length) {
              this.stackB.push(this.stackA.pop());
          }
          return this.stackB.pop();
      } else {
          return this.stackB.pop();
      }

  }
  peek() {
       if (this.stackA.length) {
          while (this.stackA.length) {
              this.stackB.push(this.stackA.pop());
          }
          return this.stackB[this.stackB.length - 1];
      } else {
          return this.stackB[this.stackB.length - 1];
      }

  }
  isEmpty () {
      return this.stackA.length === 0 && this.stackB.length === 0;
  }
  print() {
      let copy;
      if (this.stackA.length) {
          copy = this.stackA.slice().reverse();
      } else {
          copy = this.stackB.slice();
      }
      console.log(copy);
  }
}

const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek());
queue.enqueue(3);
queue.enqueue(4);
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
queue.enqueue('A');
queue.dequeue();
queue.print();

