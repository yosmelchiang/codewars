// source: codewars

const vowels = ['a', 'e', 'i', 'o', 'u'];

function getVowels(str) {
  const arr = [];
  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i].toLowerCase())) { // We gotta make sure we perform case-insensitivity here
      arr.push(str[i]);
    }
  }
  return arr.length === 0 ? 0:arr;
}

// console.log(getVowels('HELLo'))

// with regex
function getVowelsRegEx(str) {
  const regEx = str.match(/[aeiou]/gi);
  
  return !regEx ? 0: regEx;
}
console.log(getVowelsRegEx('Hellou'));