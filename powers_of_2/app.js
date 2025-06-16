// source: codewars

// Takes a non-integer n as input
// Returns a list of all the powers of 2 ranging from 0 and up to n (n inclusive)

// Examples:
// n = 0 = [1] // [2^0]
// n = 1 = [1, 2]
// n = 2 = [1, 2, 4]

// Iterations:
// i = 0: 2^0
function powerOfTwo(n) {
  const arr = []; // Populate this array with the calculation results for each i

  for(let i = 0; i <= n; i++) {
    arr.push(2**i);
  }
  return arr;
}

// console.log(powerOfTwo(0)) // [1]
// console.log(powerOfTwo(1)) // [1, 2]
// console.log(powerOfTwo(2)) // [1, 2, 4]

function powerOfTwoV2(n) {
  const arr = [];
  
  for(let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}
// console.log(powerOfTwoV2(0)) // [1]
// console.log(powerOfTwoV2(1)) // [1, 2]
// console.log(powerOfTwoV2(2)) // [1, 2, 4]

function powerOfTwoV3(n) {
  return [...Array(n + 1)].map((_, i) => {return 2**i;});
}
console.log(powerOfTwoV3(0)); // [1]
console.log(powerOfTwoV3(1)); // [1, 2]
console.log(powerOfTwoV3(2)); // [1, 2, 4]
