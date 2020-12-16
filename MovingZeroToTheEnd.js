// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//moveZeros([1,2,0,1,0,1,0,3,0,1])),
//  => [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]

//I array
//O array

var moveZeros = function (arr) {
    let arrFilter0 = arr.filter(x => x !== 0)
    // console.log(arrFilter0);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] === 0) {
      arrFilter0.push (arr[i]);
      
    }
  }
  return arrFilter0;
};

console.log (moveZeros ([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
