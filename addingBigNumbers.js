function add (a, b) {
  let arr1 = a.split ('');
  let arr2 = b.split ('');
  let arr3;
  if (arr1.length > arr2.length) {
    let numb = arr1.length - arr2.length2;
    for (let i = 0; i < numb; i++) {
      arr2.unshift (0);
    }
  } else if (arr1.length < arr2.length) {
    let numb = arr2.length - arr1.length2;
    for (let i = 0; i < numb; i++) {
      arr1.unshift (0);
    }
  }
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    let sum = Number (arr1[i]) + Number (arr[j])
    if (sum < 10) {
      arr3.push (sum);
    } else if(sum >= 10) {
      arr3.push(sum - 10);
      arr1[i] = Number(arr[i]) + 
    }
  }
}

console.log (
  add ('63829983432984289347293874', '90938498237058927340892374089')
);
//91002328220491911630239667963
