//Complete the solution so that the function will break up camel casing, using a space between words.

//solution("camelCasing")  ==  "camel Casing"


// function solution(string) {     
//   let arr1 = string.split('');  
// function isUpperCase(letter) {
// letter1 =letter.toUpperCase()
// if(letter1 === letter) {
//      return true
// } else return false
// }
// for( let i = 0; i < arr1.length; i++) {
//      if(isUpperCase(arr1[i])) {
//            arr1.splice(i,0,' ');
//            i++;         
//      }
// }
// result = arr1.join('');
// return result
// }
function solution(string) {
     return(string.replace(/([A-Z])/g, ' $1'));
   
   }
console.log(solution('camelCasingTest'))

// function isUpperCase(letter) {
//      letter1 =letter.toUpperCase()
//      if(letter1 === letter) {
//           return true
//      } else return false
//      }
    
   
     // arr = ["a","b","c","d","e","f"]
     // arr.splice(2,0,"z")
     // console.log(arr)
