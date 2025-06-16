// source: codewars

// Given a string, we have to return a new string where each character (case-sensitive) is repeated once.
/** Example
 * "String" -> "SSttrriinngg"
 * "Hello World" -> "HHeelloo WWoorrlldd"
 * "1234!_" -> "11223344!!__"
 */

function doubleChar(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}

// console.log(doubleChar('String'))
// console.log(doubleChar('Hello World'))
// console.log(doubleChar('1234!_'))

function doubleCharV2(str) {
  return str.split('').map(c => {return c + c;}).join('');
}
// console.log(doubleCharV2('String'))
// console.log(doubleCharV2('Hello World'))
// console.log(doubleCharV2('1234!_'))

function doubleCharV3(str) {
  return [...str].map(c => {return c + c;}).join('');
}

console.log(doubleCharV3('String'));
console.log(doubleCharV3('Hello World'));
console.log(doubleCharV3('1234!_'));