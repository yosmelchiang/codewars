// You will be given a list of strings, you must sort it alphabetically case-sensitive and based on the ASCII values of the chars.
// ASCI values means that uppercase letters will be before lowercase letters
// Return the first value and have *** between each of its letters, it also must be a string

// const myArr = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];
// const myArr = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"];
// console.log(myArr.sort().shift().split('').join('***'))

function twoSort(s) {
  // Array.prototype.sort() will sort alphabetically based on ASCII values
  // it mutates the original array, if we dont want this we can use toSorted()
  return s.sort().shift().split('').join('***');
}