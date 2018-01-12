/*
Find smallest common number
Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.

*/

function findSmallestCommon (arr1, arr2, arr3) {
  let ptr1 = 0;
  let ptr2 = 0;
  let ptr3 = 0;

  while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
    // console.log(ptr1, ptr2, ptr3)
    if (arr1[ptr1] < arr2[ptr2]) {
      ptr1++;
    }
    else if (arr1[ptr1] > arr2[ptr2]) {
      ptr2++;
    }
    else {
      while (ptr3 < arr3.length && arr3[ptr3] <= arr1[ptr1]) {
        if (arr3[ptr3] === arr1[ptr1]) {
          return arr3[ptr3];
        }
        ptr3++;
      }
      ptr1++;
      ptr2++;
    }
  }
  return null;
}

const arr1 = [6, 7, 10, 25, 30, 63, 64];
const arr2 = [-1, 4, 5, 7, 8, 50];
const arr3 = [1, 6, 10, 14];

findSmallestCommon(arr1, arr2, arr3)
