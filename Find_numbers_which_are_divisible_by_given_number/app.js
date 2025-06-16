// source: codewars

/**
 * The function takes two arguments and returns all numbers which are divisible by the given divisor
 * First argument is an array of numbers
 * Second argument is the divisor
 * 
 * Example
 * divisibleBy([1, 2, 3, 4, 5, 6], 2) -> [2, 4, 6]
 */

function divisibleBy(numbers, divisor) {
  const arr = [];
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % divisor === 0) {
      arr.push(numbers[i]);
    }
  }
  return arr;
}

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function divisibleByV2(arr, divisor) {
  return arr.filter((num) => {return num % divisor === 0;});
}

console.log(divisibleByV2([1, 2, 3, 4, 5, 6], 2));