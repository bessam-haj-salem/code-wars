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
  for (let i = 1; i < arr.length; i += numberRails) {
    console.log (i);
    for (let j = i - 1; j < i + numberRails - 1; j++) {
      console.log (arr[j]);
      arr1.push (arr[j]);
    }
    arr2.push (arr1);
    arr1 = [];
  }
  console.log (arr2);
  // code
}

console.log (encodeRailFenceCipher ('WEAREDISCOVEREDFLEEATONCE', 3));
