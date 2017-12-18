var array = [1, 2, 2, 5, 6, 1, 7, 6, 10];
var uniqueArray = removeDuplicates(array); // [1, 2, 5, 6, 7, 10]


function removeDuplicates(array) {
  let uniqueArr = [];
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      uniqueArr.push(array[i]);
      set.add(array[i]);
    }
  }
  return array;
}
