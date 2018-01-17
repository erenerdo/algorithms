/*

Reverse words in a sentence
Given a sentence, reverse the order of words.

*/

console.log(reverseWords('Hello World!'));
console.log(reverseWords('The quick brown fox jumped over the lazy dog.'));

function reverseWords (sentence) {
  if (!sentence || sentence.length <= 1) return sentence;

  let charArr = sentence.split('');
  charArr = charArr.reverse();
  let start = 0;
  let end = start + 1;

  while (end < sentence.length) {
    if (charArr[end] === ' ') {
      reverseIdx(charArr, start, end - 1);
      start = end + 1;
      end = start + 1;
      continue;
    }
    end++;
  }
  // Reverse last word
  reverseIdx(charArr, start, end - 1);
  return charArr.join('');
}

function reverseIdx(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }
}
