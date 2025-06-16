// source: codewars

/**
 * Create a method to see whether the string is ALL CAPS.
 * In this Kata, a string is said to be in ALL CAPS whenever it does 
 *  not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
 * 
 * "c" -> False
 * "C" -> True
 * "hello I AM DONALD" -> False
 * "HELLO I AM DONALD" -> True
 * "ACSKLDFJSgSKLDFJSKLDFJ" -> False
 * "ACSKLDFJSGSKLDFJSKLDFJ" -> True
 * 
 */


// Method: Compare each character against an uppercase version if it

// Imperative version
function isAllCaps(string) {
  const upperCasedString = string.toUpperCase();

  for(let i = 0; i < string.length; i++) {
    if(string[i] != upperCasedString[i]) 
      return false;
  }
  return true;
}

// console.log(isAllCaps('ACSKLDFJSGSKLDFJSKLDFJ'))
// console.log(isAllCaps('hello I AM DONALD'))


// Declarative version
function isAllCapsV2(string) {
  return [...string].every(char => {return char.toUpperCase() === char;});
}

console.log(isAllCapsV2('ACSKLDFJSGSKLDFJSKLDFJ'));
console.log(isAllCapsV2('hello I AM DONALD'));

/**
 * MDN Array.prototype.every()
 * The every() method of Array instances tests whether all 
 * elements in the array pass the test implemented by the provided function. 
 * It returns a Boolean value.
 */