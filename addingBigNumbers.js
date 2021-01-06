function add (a, b) {
  let arr1 = a.split ('');
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

console.log (
  add ('63829983432984289347293874', '90938498237058927340892374089')
);
//console.log (add ('888', '222'));
//91002328220491911630239667963
//console.log (add ('123456', '12345678'));
