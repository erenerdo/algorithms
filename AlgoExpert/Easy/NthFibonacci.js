/*

Nth Fibonacci

The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

Sample input: 6
Sample output: 5 (0, 1, 1, 2, 3, 5)

*/

function getNthFib(n) {
	// Base Cases
	if (n === 1) return 0;
	else if (n === 2 || n === 3) return 1;

	// Initialize fib variables
	let fib1 = 1;
	let fib2 = 1;
	let newFib;

	// Initialize counter
	let count = 4;

	while (count <= n) {
		newFib = fib1 + fib2;
		fib1 = fib2;
		fib2 = newFib;
		count++;
	}
	return newFib;
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
