// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// validPhoneNumber("(123) 456-7890")  =>  returns true
// validPhoneNumber("(1111)555 2345")  => returns false
// validPhoneNumber("(098) 123 4567")  => returns false

function validPhoneNumber (phoneNumber) {
  let arr1 = phoneNumber.split ('');
  let arr2 = arr1.filter (
    x => x !== ')' && x !== '(' && x !== '-' && x !== ' '
  );
  let arr3 = arr1.filter (
    x => x === ')' || x === '(' || x === '-' || x === ' '
  );

  let result = true;
  if (
    arr3[0] !== '(' ||
    arr3[1] !== ')' ||
    arr3[2] !== ' ' ||
    arr3[3] !== '-' ||
    arr3.length !== 4
  ) {
    result = false;
  }

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number (arr2[i]);

    if (isNaN (arr2[i]) || arr2.length !== 10) {
      result = false;
    }
  }

  return result;
}
console.log (validPhoneNumber ('(0m0) 456-7890'));
