// Start, Check, Do, Step
function reverseSequence(n) {
  const arr = [];

  for(let i = n; i >= 1; i--) {
    arr.push(i)
  }

  return arr
}

console.log(reverseSequence(5));

function countUpTo(n) {
  const arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr;
}
console.log(countUpTo(5))