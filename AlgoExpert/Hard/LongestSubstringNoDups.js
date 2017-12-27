/*

Longest Substring Without Duplication

Write a function that takes in a string and that returns its longest substring without duplicate characters. Assume that there will only be one longest substring without duplication.

Sample input: "clementisacap"
Sample output: "mentisac"

*/
function longestSubstringWithoutDuplication(str) {
  // Write your code here.
	const hMap = new Map();
	let startIdx = 0;
	let ptr = 0;
  let maxSS = [0, 0];

	while (ptr < str.length) {
		if (hMap.has(str[ptr])) {
			startIdx = Math.max(startIdx, hMap.get(str[ptr]) + 1);
		}
		hMap.set(str[ptr], ptr);
		ptr++;
		if(ptr - startIdx > maxSS[1] - maxSS[0]) {
			maxSS[0] = startIdx;
			maxSS[1] = ptr;
		}
	}
	return str.substring(maxSS[0], maxSS[1]);
}
