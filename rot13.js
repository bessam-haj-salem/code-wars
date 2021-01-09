// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13 (message) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let messageArr = message.split ('');
  let arr = [];
  let length = alphabet.length;
  for (let i = 0; i < messageArr.length; i++) {
    let index = alphabet.indexOf (messageArr[i].toLowerCase ());
    if (index >= 0) {
      if (length > index + 13) {
        arr.push (alphabet[index + 13]);
      } else {
        arr.push (alphabet[-(length - (index + 13))]);
      }
    }
    else {
        arr.push(messageArr[i])
    }
  }
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (messageArr[j] === messageArr[j].toUpperCase ()) {
      arr[i] = arr[i].toUpperCase ();
    }
    i++;
    j++;
  }
  return arr.join ('');
}

console.log (rot13 ('Random Strings'));
