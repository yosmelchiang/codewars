// source: codewars

const log = console.log;

// Task
// Given an array of numbers and an index, 
// return either the index of the smallest number that is larger than the element at the given index,
// or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Examples
    //  leastLarger( [4, 1, 3, 5, 6], 0 ), 3
    //  leastLarger( [4, 1, 3, 5, 6], 4 ), -1
    //  leastLarger( [1, 3, 5, 2, 4], 0 ), 3

// Notes on [4, 1, 3, 5, 6], 0 ), 3
// The given index is 0 and the element is 4
// We need to find the smallest of the numbers that are larger than 4
// 5 and 6 are larger and 5 is the smallest of those two
// Index of 5 is 3

// Pseudo
    // store the number of given index in a var
    // filter the array for the larger numbers
    // sort the array from smallest to larger and slice it
        // if the processed array is empty, just return -1 right away
    // if the array is not empty store it as a string so we can use index of in the original array to find its index

function leastLarger(a,i) {
  const element = a[i]
  const smallest = Math.min(...a.filter(e => e > element))
  
  return a.indexOf(smallest)
}

log(leastLarger([4, 1, 3, 5, 6], 0))
log(leastLarger([4, 1, 3, 5, 6], 4 )) // 
log(leastLarger([1, 3, 5, 2, 4], 0 ))

