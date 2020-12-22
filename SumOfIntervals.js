// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
// ] ); // => 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); // => 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ); // => 19

//Solution
//I : array of arrays
// O : number

function sumIntervals (intervals) {
  debugger;
  let arr2 = [];
  let arr = intervals.slice ();
  let count = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][1] - arr[i][0];
  }
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (intervals[i][1] <= arr[j][0]) {
        arr2.push (intervals[i][1] - intervals[i][0] + arr[j][1] - arr[j][0]);
      } else if (intervals[i][1] > arr[j][0] && arr[j][1] > intervals[i][1]) {
        arr2.push (arr[j][1] - intervals[i][0]);
       }else if(intervals[i][0] < arr[j][0] && intervals[i][1] > arr[j][1]) {
         arr2.push(intervals[i][1] - intervals[i][0])
       }
       arr.splice(j,1)
    }
    intervals.splice (i, 1);
    //intervals.splice (i, 1);
  }
  console.log (result);
  console.log (arr2);
  return arr2.reduce ((a, b) => a + b) - result;
}
console.log (sumIntervals ([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]));
