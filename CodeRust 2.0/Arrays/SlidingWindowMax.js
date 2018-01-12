/*
Find Maximum in Sliding Window:

Given a large array of integers and a window of size 'w', find the current maximum in the window as the window slides through the entire array.
*/

function maxSlidingWindow(nums, w) {
  // Edge case
   if (w === 0) return [];

   const window = [];
   const maxes = [];

   // Add first element to the window
   window.push(new WN(nums[0], 0));

   // Add remaining elements in window to the list
   for (let i = 1; i < w; i++) {
     // Remove elements from the tail that are less than the current element
     removeLowVals(window, nums[i]);
     window.push(new WN(nums[i], i));
   }
   // Add first max to the maxes array
   maxes.push(window[0].ele);

   // For the remaining windows
   for (let i = 1; i <= nums.length - w; i++) {
     let newEle = nums[i + w - 1];

     // Remove elements from the tail that are less than the current element
     removeLowVals(window, newEle);

     while (window.length && window[0].idx < i) {
       window.shift();
     }
     window.push(new WN(newEle, i + w - 1));
     maxes.push(window[0].ele);
   }
   return maxes;
 }

 // Helper function
 function removeLowVals (window, ele) {
   while (window.length && window[window.length - 1].ele <= ele) {
       window.pop();
   }
 }

 // Window Node Class
 function WN (ele, idx) {
   this.ele = ele;
   this.idx = idx;
 }

/*

 Just using indexes:

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, w) {
  // Edge case
   if (w === 0) return [];

   const window = [];
   const maxes = [];

   // Add first element to the window
   window.push(0);

   // Add remaining elements in window to the list
   for (let i = 1; i < w; i++) {
     // Remove elements from the tail that are less than the current element
     removeLowVals(window, nums[i], nums)
     window.push(i);
   }
   // Add first max to the maxes array
   maxes.push(nums[window[0]]);

   // For the remaining windows
   for (let i = 1; i <= nums.length - w; i++) {
     let newEle = nums[i + w - 1];

     // Remove elements from the tail that are less than the current element
     removeLowVals(window, newEle, nums)

     while (window.length && window[0] < i) {
       window.shift();
     }
     window.push(i + w - 1)
     maxes.push(nums[window[0]]);
   }
   return maxes;
 };

 function removeLowVals (window, ele, nums) {
   while (window.length && nums[window[window.length - 1]] <= ele) {
       window.pop();
   }
 }

