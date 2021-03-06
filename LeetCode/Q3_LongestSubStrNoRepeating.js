/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} str
 * @return {number}
 */

var lengthOfLongestSubstring = function(str) {
  const hSet = new Set();
  let lead = 0;
  let trail = 0;
  let maxLength = 0;

  while (lead < str.length) {
      if (!hSet.has(str[lead])) {
          hSet.add(str[lead]);
          lead++;
          maxLength = Math.max(maxLength, lead - trail)
      }
      else {
          hSet.delete(str[trail]);
          trail++;
      }
  }
  return maxLength;
};
