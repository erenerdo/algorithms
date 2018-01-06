/*
Given two arrays and an integer k(difference), check if all numbers have the same difference k

arr1 = [1,4,9], 3
arr2 = [4,12,7]

O(n)


{
    1: 1,
    4: 1,
    9: 1
}
*/

function kDif (arr1, arr2, k) {

    // Create hash table for the array and
    let hTable = {}
    for (let i = 0; i < arr1.length; i++) {
        if (hTable[arr1[i]]) {
            hTable[arr1[i]] += 1;
        }
        else {
            hTable[arr[i]] = 1;
        }
    }

    // Check if each element arr2 is in htable
    for (let j = 0; j < arr2.length; j++) {
        if (hTable[arr2[j]]) {
            hTable[arr2[j]] -= 1;
        }
        else {
            return false;
        }
    }

    // Check to make sure hTable is empty
    for (let key of hTable) {
        if (hTable[key] !== 0) return false
    }
    return true;
}
