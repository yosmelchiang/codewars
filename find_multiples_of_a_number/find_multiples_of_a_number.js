function findMultiples(integer, limit) {
  const arr = [];
  for(let i = 1; (i * integer) <= limit; i++) {
    arr.push(i* integer);
  }
  return arr;
}


// console.log(findMultiples(2, 6)); // [ 2, 4, 6 ]
// console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
// console.log(findMultiples(1, 2)); // [1, 2]
// console.log(findMultiples(4, 27)); // [ 4, 8, 12, 16, 20, 24 ]
// console.log(findMultiples(11, 54)); // [ 11, 22, 33, 44 ]

// With a while
function findMultiplesWhile(integer, limit) {
  const arr = [];
  let i = 1;
  
  while(i * integer <= limit) {
    arr.push(i * integer);
    i++;
  }
  
  return arr;
}

console.log(findMultiplesWhile(2, 6)); // [ 2, 4, 6 ]
console.log(findMultiplesWhile(5, 25)); // [5, 10, 15, 20, 25]
console.log(findMultiplesWhile(1, 2)); // [1, 2]
console.log(findMultiplesWhile(4, 27)); // [ 4, 8, 12, 16, 20, 24 ]
console.log(findMultiplesWhile(11, 54)); // [ 11, 22, 33, 44 ]