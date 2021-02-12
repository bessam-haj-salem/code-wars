// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba
// b
//  . Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^79
// 7
//   is 999, since 97=47829699^7 = 47829699
// 7
//  =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2
// 200
//  )
// 2
// 300

//  , which has over 109210^{92}10
// 92
//   decimal digits, is 666. Also, please take 000^00
// 0
//   to be 111.

// You may assume that the input will always be valid.

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0
// Remarks
// JavaScript, C++, R, PureScript
// // Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

var lastDigit = function (str1, str2) {
  let arr1 = str1.split ('');
  let arr2 = arr1.slice ();
  let arrMul = [];
  function add (a, b) {
    let arr1 = a.split ('');
    console.log(a);
    console.log(b);
    let arr2 = b.split ('');
    let arr3 = [];
    if (arr1.length > arr2.length) {
      let numb = arr1.length - arr2.length;
      for (let i = 0; i < numb; i++) {
        arr2.unshift (0);
      }
    } else if (arr1.length < arr2.length) {
      let numb = arr2.length - arr1.length;
      for (let i = 0; i < numb; i++) {
        arr1.unshift (0);
      }
    }
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    while (i >= 0 && j >= 0) {
      let sum = +arr1[i] + +arr2[j];
      if (sum < 10) {
        arr3.push (sum);
        i--;
        j--;
      } else if (sum >= 10) {
        if (i === 0 && j === 0) {
          arr3.push (sum);
          i--;
          j--;
        } else {
          let arrRest = sum.toString ().split ('');
          arr3.push (+arrRest[1]);

          arr1[i - 1] = +arr1[i - 1] + +arrRest[0];
          i--;
          j--;
        }
      }
    }
    return arr3.reverse ().join ('');
  }
  let arrMulBig = [];
  for (i = arr1.length - 1; i > 0; i--) {
    for (j = arr2.length - 1; j > 0; j--) {
      let mul = +arr1[i] * +arr2[j];
      if (mul < 10) {
        arrMul.push (multoString())
//console.log(arrMul);
      } else {
        let arrRest = mul.toString ().split ('');
        arrMul.push (+arrRest[1]);

        arr1[i - 1] = +arr1[i - 1] + +arrRest[0];
      }
    }
    arrMulBig.push (arrMul.join (''));
    arrMul = [];
  }
console.log(arrMulBig);
  //console.log(arrMulBig.length);
 // console.log(arrMulBig[1]);
  //console.log(arrMulBig[3]);
  arrMulBig[1] = arrMulBig[1] + 0
  //console.log(arrMulBig[1]);
  for (let i = 2; i < arrMulBig.length; i++) {
    arrMulBig[i] = arrMulBig[i] + arrMulBig[i-1].slice(-i+1) + 0 ;
   // console.log(arrMulBig[i]);
  }
 // console.log(arrMulBig[3]);
 // console.log(arrMulBig[3]);
  //console.log(arrMulBig);
  let result = "";
  console.log(arrMulBig);
  for (let i = 0; i < arrMulBig.length; i++) {
    result = result + add(result, arrMulBig[i])
  }
 //console.log (result);
};
//console.log (
//   lastDigit (
//     '3715290469715693021198967285016729344580685479654510946723',
//     '68819615221552997273737174557165657483427362207517952651'
//   )
// );
//console.log(lastDigit("10","10000000000"));
console.log(lastDigit("1","4"));