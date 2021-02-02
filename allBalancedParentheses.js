// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

function balancedParens (n) {
  let arrStr = [];
  for (let i = 0; i < n; i++) {
    arrStr.push ('(', ')');
  }
  let string = arrStr.join ('');
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
  function combinations (str) {
    let fn = (active, rest, a) => {
      if (!active && !rest) return;
      if (!rest) {
        a.push (active);
      } else {
        fn (active + rest[0], rest.slice (1), a);
        fn (active, rest.slice (1), a);
      }
      return a;
    };
    return fn ('', str, []);
  }
  let arrResult = [];
  let combinArray = combinations (string);
  for (let i = 0; i < combinArray.length; i++) {
    if (isBalanced (combinArray[i])) {
      arrResult.push (combinArray[i]);
    }
  }
  return arrResult;
}

console.log (balancedParens (3));
