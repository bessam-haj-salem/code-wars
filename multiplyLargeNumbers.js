function multiply (a, b) {
  //function for adding two big numbers done before
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

  //split numbers in arrays :
  let arrNumb1 = a.split ('');
  //console.log(arrNumb1);
  let arrNumb2 = b.split ('');
  let mult = 0;
  let multArr = [];
  let multBig = [];
  let rest = 0;
  let rest1 = 0;
  for (let i = 0; i < arrNumb2.length; i++) {
    for (let j = 0; j < arrNumb1.length; j++) {
      mult = +arrNumb1[j] * +arrNumb2[i];
     // console.log(mult);
      if (mult >= 10) {
        if (rest1 !== 0) {
          mult = mult + rest1;
          rest = +mult.toString ().charAt (1);
          rest1 = +mult.toString ().charAt (0);
          multArr.push (rest);
        } else {
          rest = +mult.toString ().charAt (1);
          rest1 = +mult.toString ().charAt (0);
          multArr.push (rest);
        }
      } else {
        if (rest !== 0) {
          multArr.push (mult + rest1);
        } else {
          multArr.push (mult);
        }
      }
    }
    //console.log(multBig);
    multBig.push (multArr.join (''));
    console.log(multArr);
    multArr = [];
  }
  console.log(multBig);
  multBig[1] = multBig[1] + 0
  for (let i = 2; i < multBig.length; i++) {
    multBig[i] = multBig[i] + multBig[i-1].slice(-i+1) + 0 ;
   // console.log(arrMulBig[i]);
  }
  let result = "";
  console.log(multBig);
  for (let i = 0; i < multBig.length; i++) {
    result = result + add(result, multBig[i])
  }
  return result
}
console.log(multiply("1","4"));