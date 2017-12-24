/*
3.1 Three in One: Describe how you could use a single array to implement three stacks.
*/

/*
A single array can be used to implement a stack by having disperesed into three equally size arrays. Each of these three subarrays will be treated as it's own stack.

array length = N;

length of arrays would be N/3

Each subarray would have a bottom and top pointer as well as a max index
- bottom would indicate just where the stack starts
- top would indicate the top element on the stack
- max index would indicate the index value at which the stack must stop and be full at, right before the next stack or the end of the entire array
*/
