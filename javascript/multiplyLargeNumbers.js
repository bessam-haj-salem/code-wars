

function multiply (a, b) {
  debugger;
  if (a !== '0' && b !== '0') {
    a = a.replace (/^0+/, '');
    b = b.replace (/^0+/, '');
  }

  // let switch1;
  // if (a.length < b.length) {
  //   switch1 = a;
  //   a = b;
  //   b = switch1;
  // }
  //function for adding two big numbers done before
  //*********************************** */
  function add (a, b) {
    let arr1 = a.split ('');
    // console.log (a);
    // console.log (b);
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
  let addZero = arr1 => {
    let len = arr1.length;
    let arrZero = [''];
    for (let i = 1; i < len; i++) {
      arrZero[i] = arrZero[i - 1] + 0;
    }
   // console.log (arrZero);
    let i = 0;
    let j = 0;
    let arrResult = [];
    while (i < arr1.length && j < arrZero.length) {
      arrResult.push (arr1[i] + arrZero[j]);
      i++;
      j++;
    }

    return arrResult;
  };
  //**************** */
  //split numbers in arrays :
  let arrNumb1 = a.split ('');
  //console.log(arrNumb1);
  let arrNumb2 = b.split ('');
  let mult = 0;
  let multArr = [];
  let multBig = [];
  let rest = 0;
  let rest1 = 0;
  for (let i = arrNumb2.length - 1; i >= 0; i--) {
    for (let j = arrNumb1.length - 1; j >= 0; j--) {
      if (j >= 0) {
        mult = +arrNumb1[j] * +arrNumb2[i];
        //console.log (mult);
        if (mult >= 10) {
          
            if (j === 0) {
              mult = mult + rest1;
              multArr.push (mult);
            } else {
              mult = mult + rest1;
              rest = +mult.toString ().charAt (1);
              rest1 = +mult.toString ().charAt (0);
              multArr.push (rest);
            }
          
        } else {
          if(j === 0) {
            mult = mult + rest1;
            multArr.push (mult);
          } else {
            multArr.push (mult + rest1);
            rest1 = 0;           
            
          }
        }
      }
    }
    //console.log(multBig);
    multBig.push (multArr.reverse ().join (''));
    // console.log (multArr);
    multArr = [];
    rest1 = 0;
  }
  multBig = addZero (multBig);
   //console.log (multBig);
  if (multBig.length === 1) {
    if (multBig[0].replace (/^0+/, '') === '') {
      return '0';
    } else {
      return multBig[0].replace (/^0+/, '');
    }
  }
//   for (let i = 0; i < multBig.length; i++) {
//     if (multBig[i].replace (/^0+/, '') === '') {
//       multBig.splice(i,1)    
//   }
// }
  console.log(multBig);
  
  
  let result = '';
 // console.log (multBig);
  // for (let i = 0; i < multBig.length; i++) {
  //   result =  add (result, multBig[i]);
  // }

  result = multBig.reduce ((a, b) => add (a, b));
 
  result = result.replace (/^0+/, '');

  return result;
}
//console.log(multiply("98765", "56894"));
//console.log (multiply("1020303004875647366210", "2774537626200857473632627613"));
console.log(multiply("58608473622772837728372827", "7586374672263726736374"));
//console.log (multiply ('901', '90070'));
//console.log(multiply ('9007', '901'));
//console.log(multiply("9007199254740991", "9007199254740991"));
/// the problem is inside now with zeroo

