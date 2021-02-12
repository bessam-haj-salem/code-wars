// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// let s1 = 'my&friend&Paul has heavy hats! &';
// let s2 = 'my friend John has many many friends &';
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = 'Are the kids at home? aaaaa fffff';
s2 = 'Yes they are here! aaaaa fffff';
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

function mix (s1, s2) {
  s1 = s1.split ('');
  s2 = s2.split ('');
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  abc = abc.split ('');
  let mixArr = arr => {
    let arrLet = [];
    let arrAllLet = [];
    let count = 0;
    // your code
    for (let j = 0; j < abc.length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === abc[j]) {
          arrLet.push (arr[i]);
          count++;
        }
      }
      if (count !== 0) {
        arrAllLet.push (count + ':' + arrLet.join (''));

        arrLet = [];
        count = 0;
      }
    }
    return arrAllLet;
  };
  let s1Arr = mixArr (s1);
  let s2Arr = mixArr (s2);
  let searchNumb = str => {
    let n = str.match (/\d+/);
    return +n[0];
  };
  let arrRes = [];
  let count = 0
  for (let i = 0; i < s1Arr.length; i++) {
    let s1n = searchNumb (s1Arr[i]);

    for (let j = 0; j < s2Arr.length; j++) {
      let s2n = searchNumb (s2Arr[j]);
      if (s1Arr[i][2] === s2Arr[j][2]) {
        if (s1n !== 1 || s2n !== 1) {
          if (s1n > s2n) {
            arrRes.push (s1Arr[i].replace (s1Arr[i][0], '1'));
          } else if (s1n < s2n) {
            arrRes.push (s2Arr[j].replace (s2Arr[j][0], '2'));
          } else {
            arrRes.push (s1Arr[i].replace (s1Arr[i][0], '='));
          }
        }
        
      } else if (s1Arr[i][2] !== s2Arr[j][2]) {
        
        count++;
       
        if (s1n > 1 && count === s2Arr.length ) {
          arrRes.push (s1Arr[i].replace (s1Arr[i][0], '1'));
        }
       
      }
   
  }
  count=0
}
//*************** */
for (let i = 0; i < s2Arr.length; i++) {
  for (let j = 0; j < s1Arr.length; j++) {
    let s2n = searchNumb (s2Arr[i]);
   if (s2Arr[i][2] !== s1Arr[j][2]) {
      count++;
      if (s2n > 1 && count === s1Arr.length ) {
        arrRes.push (s2Arr[i].replace (s2Arr[i][0], '2'));
      }
    }
}
count=0
}
//**************** */
  let arrResult = arrRes.sort ((a, b) => {
    return b.length - a.length;
  });

  let arrR = [];
  for (let i = 0; i < arrResult.length; i++) {
    let arr = arrResult.filter (a => a.length === arrResult[i].length);
    if (arr.length === 1) {
      arrR.push (arr);
    } else if (arr.length > 1) {
      let arr1 = arr.sort ();
      arrR.push (arr);
    }
  }
  let mixer = arr => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = i;
    }
    let arrResult = [];
    let arr1 = Object.keys (obj);
    for (let i = 0; i < arr1.length; i++) {
      let arr2 = arr1[i].split (',');
      for (let j = 0; j < arr2.length; j++) {
        arrResult.push (arr2[j]);
      }
    }
    return arrResult.join ('/');
  };
  return mixer (arrR);
}

console.log (mix("Lords of the Fallen", "gamekult"));

// console.log (mixer (arr1));
