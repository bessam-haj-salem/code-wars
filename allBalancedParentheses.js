// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
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
  function getArrayMutations (arr, perms = [], len = arr.length) {
    if (len === 1) perms.push (arr.slice (0));

    for (let i = 0; i < len; i++) {
      getArrayMutations (arr, perms, len - 1);

      len % 2 // parity dependent adjacent elements swap
        ? ([arr[0], arr[len - 1]] = [arr[len - 1], arr[0]])
        : ([arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]);
    }
    return perms;
  }
  let combinArray = getArrayMutations (arrStr);
  console.log(combinArray);
  let obj ={}
  for (let i = 0; i < combinArray.length; i++) {
    if (isBalanced (combinArray[i])) {
      obj[combinArray[i].join('')] = i;
    }
  }


  let arr1 = Object.keys (obj);
  return arr1;
}

console.log (balancedParens (4));
