// Examples
/**
 * [2,2,2,2]
 * [1,2,3,4,5,]
 * [1,1,1,1,1,1,1,2]
 */

// Using a for loop
function getAverageForLoop(marks) {
  let sum = 0;

  for(let i = 0; i < marks.length; i++) {
    sum += marks[i]
  }

  return Math.floor(sum / marks.length)
}

console.log(getAverageForLoop([2, 2, 2, 2]));
console.log(getAverageForLoop([1, 2, 3, 4, 5]));
console.log(getAverageForLoop([1, 1, 1, 1, 1, 1, 1, 2]));


// Using reduce
function getAverageReduce(marks) {
  const sum = marks.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return Math.floor(sum / marks.length);
}

console.log(getAverageReduce([2, 2, 2, 2]));
console.log(getAverageReduce([1, 2, 3, 4, 5]));
console.log(getAverageReduce([1, 1, 1, 1, 1, 1, 1, 2]));
