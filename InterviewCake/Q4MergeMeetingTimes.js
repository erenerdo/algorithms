/*

Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

  {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges.

*/

var meetingTimes = [
  {startTime: 0,  endTime: 1},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
  {startTime: 3,  endTime: 5}
];


function mergeRanges(meetingTimesArray) {

  // Sort meeting times with respect to starting time
  meetingTimesArray = meetingTimesArray.sort(function(a, b){
    return a.startTime - b.startTime;
  });
  var mergedArray = [];

  // Initialize first starting and end time;
  var sTime = meetingTimesArray[0].startTime;
  var eTime = meetingTimesArray[0].endTime;

  for (var i = 0; i < meetingTimesArray.length; i++) {

    // Check if we are on last meeting of the day, if so we can just add
    if (i === meetingTimesArray.length - 1) {
      var meeting = {};
      meeting.startTime = sTime;

      if (eTime > meetingTimesArray[i].endTime) {
        meeting.endTime = eTime;
      } else {
      meeting.endTime =  meetingTimesArray[i].endTime;
      }
      mergedArray.push(meeting);
      break;
    }

    // Check if end time of one meeting is less than start time of adjacent(meetings do not intersect)
    if ( (eTime) < (meetingTimesArray[i+1].startTime) ){
      // add start time and end time to merged array and reset startTime to ith meeting
      var meeting = {};
      meeting.startTime = sTime;
      meeting.endTime =  meetingTimesArray[i].endTime;
      mergedArray.push(meeting);

      // Reset starting time
      sTime = meetingTimesArray[i + 1].startTime;
      eTime = meetingTimesArray[i + 1].endTime;
    }

  }

  return mergedArray;

}

// Meeting 1
console.log('\nMeetings One');
console.log('Given:');
console.log(meetingTimes);
console.log('Merged:');
console.log(mergeRanges(meetingTimes));

var meetingTimes = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}];

// Meeting 2
console.log('\nMeetings Two');
console.log('Given:');
console.log(meetingTimes);
console.log('Merged:');
console.log(mergeRanges(meetingTimes));

var meetingTimes = [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}];

// Meeting 3
console.log('\nMeetings Three');
console.log('Given:');
console.log(meetingTimes);
console.log('Merged:');
console.log(mergeRanges(meetingTimes));

var meetingTimes =   [
  {startTime: 1, endTime: 10},
  {startTime: 2, endTime: 6},
  {startTime: 3, endTime: 5},
  {startTime: 7, endTime: 9},
];

// Meeting 4
console.log('\nMeetings Four');
console.log('Given:');
console.log(meetingTimes);
console.log('Merged:');
console.log(mergeRanges(meetingTimes));

