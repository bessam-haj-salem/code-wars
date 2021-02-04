// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedPare => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

function balancedParens (n) {
  let arrStr = [];
  if (n === 0) {
    return [''];
  }
  for (let i = 0; i < n; i++) {
    arrStr.push ('(', ')');
  }
  let isBalanced = str => {
    let stack = [];
    let pairs = {
      '(': ')',
    };
    for (let i = 0; i < str.length; i++) {
      let chr = str[i];
      if (pairs[chr]) {
        stack.push (chr);
      } else if (chr === ')') {
        if (pairs[stack.pop ()] !== chr) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };

  function permute(nums) {
    let result = [];
    let obj = {}
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];
   for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const remainingNums = nums.slice(0, i).concat(nums.slice(i +  1));
      const remainingNumsPermuted = permute(remainingNums);
     for (let j = 0; j < remainingNumsPermuted.length; j++) {
        const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
        obj[permutedArray.join('')] = j

      }
    }
    result = Object.keys (obj);
    return result;
   }
  let combinArray = permute (arrStr);
 let arr1 = []
  for (let i = 0; i < combinArray.length; i++) {
    if (isBalanced (combinArray[i])) {
     arr1.push(combinArray[i])
    }
  }
  return arr1;
}

console.log (balancedParens (4));

//  function permute(nums) {
//     let result = [];
//     let obj = {}
//     if (nums.length === 0) return [];
//     if (nums.length === 1) return [nums];
//    for (let i = 0; i < nums.length; i++) {
//       const currentNum = nums[i];
//       const remainingNums = nums.slice(0, i).concat(nums.slice(i +  1));
//       const remainingNumsPermuted = permute(remainingNums);
//      for (let j = 0; j < remainingNumsPermuted.length; j++) {
//         const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
//         // result.push(permutedArray);
//         obj[permutedArray.join('')] = j

//       }
//     }
//     result = Object.keys (obj);
//     return result;
//    }
   
   
//  console.log(permute([1,2,3,4,5,6]));