// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// We are dividing here and checking wether the result is an integer or a float number
function isDivisible(n, x, y) {
  return Number.isInteger(n / x) && Number.isInteger(n / y);
}

// console.log(isDivisible(3, 1, 3))
// console.log(isDivisible(12, 2, 6))
// console.log(isDivisible(100, 5, 3))
// console.log(isDivisible(12, 7, 5))

// We are using the modulus here
function isDivisibleV2(n, x, y) {
  const divisibleByX = n % x === 0;
  const divisibleByY = n % y === 0;
    
  return divisibleByX && divisibleByY;
}

console.log(isDivisibleV2(3, 1, 3));
console.log(isDivisibleV2(12, 2, 6));
console.log(isDivisibleV2(100, 5, 3));
console.log(isDivisibleV2(12, 7, 5));

// We are using the modulus here - Minimalistic
function isDivisibleV3(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// console.log(isDivisibleV3(3, 1, 3))
// console.log(isDivisibleV3(12, 2, 6))
// console.log(isDivisibleV3(100, 5, 3))
// console.log(isDivisibleV3(12, 7, 5))