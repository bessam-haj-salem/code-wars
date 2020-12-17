
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False



var isBalanced = function (str) {
    let stack = [];
    let pairs = {
      '{': '}',
      '[': ']',
      '(': ')',
    };
    for (let i = 0; i < str.length; i++) {
      let chr = str[i];
      if (pairs[chr]) {
        stack.push (chr);
      } else if (chr === '}' || chr === ']' || chr === ')') {
        if (pairs[stack.pop ()] !== chr) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  console.log(isBalanced('[(]))'));