// John has invited some friends. His list is:

let s1 =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.
//*** */
// testing("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn",
//    =>         "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
//         testing("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell",
//     =>        "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
//         testing("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern",
//      =>       "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");

//solution:
//I : string;
// O: string;
//pseudocode:
//1. turn the input to uppercase
//2. put the last name before the name and replace the colon with the quotation mark
//3. do the alphabetic sort
function meeting (s) {
  let arr1 = s.split (';');
  let arr2 = [];
  let arr3 = [];
  //transform the string to uppercase
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].toUpperCase ();
  }
  //   console.log (arr1);
  for (let i = 0; i < arr1.length; i++) {
    arr2 = arr1[i].split ('');
    arr2.splice (0, 0, '(');
    arr2.push (')');
    console.log (arr2);
    for (let j = 0; j < arr2.length; j++) {
      //  arr1[i] = arr2

      console.log (arr2);
      if (arr2[j] === ':') {
        arr2.splice (j, 1, ',');
      }
      arr3.push (arr2.join (''));
    }
  }
  //   console.log (arr2);
  console.log (arr1);
  console.log (arr3);
  // your code
}
console.log (meeting (s1));
