n = 2
console.log(n%4);
function sumIntervals (intervals) {
    debugger;
    let arr2 = [];
    let arr = intervals.slice ();
    let count = 0;
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (intervals[i][1] >= arr[j][0] && arr[j][0] >= intervals[i][0]) {
          arr2.push (arr[j][1] - intervals[i][0]);
          count++;
        } else {
        arr2.push (arr[j][1] - arr[j][0]);
        }
      }
    }
  if(count === 0) {
    return arr2.reduce ((a, b) => a + b) 
  } else { return arr2.reduce ((a, b) => a + b) - (intervals[0][1] - intervals[0][0]);}
   
  }
