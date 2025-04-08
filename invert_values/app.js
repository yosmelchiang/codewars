// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, 
// and the negatives become positives.

/**
 *        [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
 *        [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
 *        [] --> []
 */

function invertValues(arr) {
  return arr.map(n => -n)
}

console.log(invertValues([1, 2, 3, 4, 5]))
console.log(invertValues([1, -2, 3, -4, 5]))
console.log(invertValues([]))