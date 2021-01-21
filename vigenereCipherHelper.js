// The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).

// The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

// From Wikipedia:

// The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.

// . . .

// In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.

// Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.

// The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

// Visual representation:

// "my secret code i want to secure"  // message
// "passwordpasswordpasswordpasswor"  // key
// Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

// Example
// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// var key = 'password';

// // creates a cipher helper with each letter substituted
// // by the corresponding character in the key
// var c = new VigenèreCipher(key, alphabet);

// c.encode('codewars'); // returns 'rovwsoiv'
// c.decode('laxxhsj');  // returns 'waffles'
// Any character not in the alphabet must be left as is. For example (following from above):

// c.encode('CODEWARS'); // returns 'CODEWARS'

function VigenèreCipher (key, abc) {
  this.encode = function (str) {
    debugger
    let cipher = (str1, n) => {
      let alphabet = abc.split ('');
      let length = alphabet.length;
      let str1Result = '';
      if (!alphabet.includes(str1)) {
        str1Result = str1;
      } else {
        let index = alphabet.indexOf (str1);
        if (index >= 0) {
          if (length > index + n) {
            str1Result = alphabet[index + n];
          } else {
            str1Result = alphabet[index + n - length];
          }
        }
      }
      return str1Result;
    };

    // return cipher(str,key)
   
    let alphabet = abc.split ('');
    let arrKey = key.split ('');
    let arrStr = str.split ('');
    let arrResult = [];
    let i = 0;
    let j = 0;
    let k = 0
    let d = arrKey.length
    if(arrKey.length >= arrStr.length) {
    while (i < arrKey.length && j < arrStr.length) {
      arrResult.push (cipher (arrStr[j], alphabet.indexOf (arrKey[i])));
      i++;
      j++;
    }
  } else if(arrKey.length < arrStr.length) {
    let newLength = arrStr.length - arrKey.length;
    while (i < arrKey.length && j < arrStr.length) {
      arrResult.push (cipher (arrStr[j], alphabet.indexOf (arrKey[i])));
      i++;
      j++;
    }
    while (k <= newLength && d < arrStr.length) {
      arrResult.push (cipher (arrStr[d], alphabet.indexOf (arrKey[k])));
      k++;
      d++;
    }

  }
    return arrResult.join ('');
  };
  this.decode = function (str) {
    let decipher = (str1, n) => {
      let alphabet = abc.split ('');
      let length = alphabet.length;
      let str1Result = '';
      if (!alphabet.includes(str1)) {
        str1Result = str1;
      } else {
        let index = alphabet.indexOf (str1);
        if (index >= 0) {
          if (index - n >= 0) {
            str1Result = alphabet[index - n];
          } else {
            str1Result = alphabet[length - (n - index)];
          }
        }
      }

      return str1Result;
    };
    let alphabet = abc.split ('');
    let arrKey = key.split ('');
    let arrStr = str.split ('');
    let arrResult = [];
    let i = 0;
    let j = 0;
    let k = 0
    let d = arrKey.length
    if(arrKey.length >= arrStr.length) {
    while (i < arrKey.length && j < arrStr.length) {
      arrResult.push (decipher (arrStr[j], alphabet.indexOf (arrKey[i])));
      i++;
      j++;
    }
  } else if(arrKey.length < arrStr.length) {
    let newLength = arrStr.length - arrKey.length;
    while (i < arrKey.length && j < arrStr.length) {
      arrResult.push (decipher (arrStr[j], alphabet.indexOf (arrKey[i])));
      i++;
      j++;
    }
    while (k <= newLength && d < arrStr.length) {
      arrResult.push (decipher (arrStr[d], alphabet.indexOf (arrKey[k])));
      k++;
      d++;
    }

  }
    return arrResult.join ('');
  };
}

// var abc, key;
abc = 'abcdefghijklmnopqrstuvwxyz';
//var abc = 'アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー';
key = 'password';
let c = new VigenèreCipher (key, abc);
//console.log (c.decode ('eimbazmr'));

//console.log (c.encode ('it\'s a shift cipher!'));


  let cipher = (str1, n) => {
    let alphabet = abc.split ('');
    let length = alphabet.length;
    let str1Result = '';
    if (!alphabet.includes(str1)) {
      str1Result = str1;
    } else {
      let index = alphabet.indexOf (str1);
      if (index >= 0) {
        if (length > index + n) {
          str1Result = alphabet[index + n];
        } else {
          str1Result = alphabet[index + n - length];
        }
      }
    }
    return str1Result;
  };
  console.log(cipher("x", 0));