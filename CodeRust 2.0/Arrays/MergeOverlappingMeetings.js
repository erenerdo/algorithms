/*

Given an array (list) of intervals as input where each interval has a start and end timestamps. Input array is sorted by starting timestamps. You are required to merge overlapping intervals and return output array (list).

*/

function mergeOverlapping (meetings) {
  let mergedStart = meetings[0][0];
  let mergedEnd = meetings[0][1];
  const mergedMeetings = [];

  for (let i = 1; i < meetings.length; i++) {
    const curStart = meetings[i][0];
    const curEnd = meetings[i][1];

    if (curStart >= mergedStart && curStart <= mergedEnd) {
      // Meeting times can be merged
      mergedEnd = Math.max(mergedEnd, curEnd);
    }
    else {
      // Meetings can not be merged
      mergedMeetings.push([mergedStart, mergedEnd]);
      mergedStart = curStart;
      mergedEnd = curEnd;
    }
  }
  // Add last meeting
  mergedMeetings.push([mergedStart, mergedEnd]);
  return mergedMeetings;
}


let meetArr= [[1,3],[2,6],[8,10],[15,18]];

mergeOverlapping(meetArr);

