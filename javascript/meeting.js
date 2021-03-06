// John has invited some friends. His list is:

let s1 =
  'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn';
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

function meeting (s) {
  let arr1 = s.split (';');
  let arr2 = [];
  let arr3 = [];
  let arrR1 = [];
  let arrS1 = [];
  //reverse the words :
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].split (':').reverse ().join ();
  }
  //transform the string to uppercase
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].toUpperCase ();
  }
  //add the '(' and ')' ;
  for (let i = 0; i < arr1.length; i++) {
    arr2 = arr1[i].split ('');
    arr2.splice (0, 0, '(');
    arr2.push (')');

    for (let j = 0; j < arr2.length; j++) {
      //removing the ',' and replace it with ', '
      if (arr2[j] === ',') {
        arr2.splice (j, 1, ', ');
      }
    }
    
    arr3.push (arr2.join (''));
  }
  arr3 = arr3.sort ().join ('');
  return arr3;
}
console.log (meeting (s1));
