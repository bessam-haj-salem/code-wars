// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

const {chartreuse} = require ('color-name');

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations (string) {
    let buildWord = (word, usedIndexes, chars, combinations) => {
        combinations.push (word);
        chars.forEach ((char, i) => {
          if (usedIndexes.indexOf (i) === -1) {
            let newUsedIndexesArray = Array.from (usedIndexes);
            newUsedIndexesArray.push (i);
            buildWord (word + char, newUsedIndexesArray, chars, combinations);
          }
        });
      };
  let chars = Array.from (string);
  let combinations = [];
  chars.forEach ((char, i) => {
    let word = '';
    buildWord (word + char, [i], chars, combinations);
  });

  combinations = combinations.filter(x => x.length === string.length);
  combinations = Array.from(new Set(combinations))

 
  return combinations;
}


console.log(permutations('aabb'));
