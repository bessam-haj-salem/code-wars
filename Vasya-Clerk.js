//The new "Avengers" movie has just been released! There are a lot of
// people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

//****Solution */
//I: array
//O: boolean
//pseudo code :
// 1. arr = input;
// if arr[0] not equal to 25 return false
// for i = 0  i < arr.length i ++
// if i = 25 => arr1.push(arr[i])
// compare the sum inside arr1 and splice if its equal to the elemeent in arr and splice the element of the arr after

function tickets (peopleInLine) {
  let arr25 = [];
  let sum25 = 0;

  let diff = 0;
  if (peopleInLine[0] !== 25) {
    return 'NO';
  }
  for (let i = 0; i <= peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      arr25.push (peopleInLine[i]);
      sum25 = arr25.reduce ((a, b) => a + b);
    } else {
      if (peopleInLine[i] === sum25) {
        arr25 = [];
      } else if (peopleInLine[i] > sum25) {
        return 'NO';
      } else if (peopleInLine[i] < sum25) {
        diff = sum25 - peopleInLine[i];
        arr25.push (diff);
      }
    }
  }
  return 'YES';
}
console.log (tickets ([25,25,50,100,25,25,25,100,25,25,25,100,25,25,25,100]));
