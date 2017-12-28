/*
Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
*/

const stackA = [5, 3, 1, 6, 8, 10, 7, 0];

function sortStack (stackA) {
    const stackB = [];
    let temp = null;

    while (true) {
        stackB.push(stackA.pop());

        while (stackA[stackA.length - 1] >= stackB[stackB.length - 1]){
            stackB.push(stackA.pop());
        }

        if (stackA.length === 0) break;

        temp = stackA.pop();

        while (stackB[stackB.length - 1] > temp) {
            stackA.push(stackB.pop());
        }
        stackA.push(temp);
        while (stackB.length) {
            stackA.push(stackB.pop())
        }
    }
    while (stackB.length) {
        stackA.push(stackB.pop());
    }
    return stackA;
}

sortStack(stackA);



