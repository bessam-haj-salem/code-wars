// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C
//     A       I       V       D       E       N
// The encoded string would be:

// WECRLTEERDSOEEFEAOCAIVDEN
// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

// // Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

function encodeRailFenceCipher (string, numberRails) {
  let arr = string.split ('');
  console.log (arr);
  let arr1 = [];
  let arr2 = [];
  let arrResult1 = []
  let arrResult2 = []
  let arrResult3 = []

  for (let i = numberRails; i < arr.length; i += numberRails) {
    arr.splice (i, 0, arr[i - 1]);
  }
  console.log (arr);
  for (let i = 0; i < arr.length; i += numberRails) {
    for (let j = i; j < numberRails + i; j++) {
      arr1.push (arr[j]);
    }
    arr2.push (arr1);
    arr1 = [];
  }
  console.log (arr2);
  for (let i = 0; i < arr2.length; i+= numberRails - 1) {
    arrResult3.push(arr2[i][arr2[i].length - 1])
  }
  for (let i = 0; i < arr2.length; i+= numberRails - 1) {
    arrResult1.push(arr2[i][0])
  }
  arrResult1.push(arr2[arr2.length][arr2[arr.length - 1]])
  for (let i = 0; i < arr2.length; i++) {
    arrResult2.push(arr2[i][])
  }
  console.log (arr2);
  //  for(let i = 1; i < arr2.length; i++) {

  //    arr2[i].unshift(arr2[i - 1][arr2[i - 1].length - 1])
  //   // arr2[i-1].pop()
  //  }

  // console.log (arr1);
}
// code

console.log (encodeRailFenceCipher ('WEAREDISCOVEREDFLEEATONCE', 3));
