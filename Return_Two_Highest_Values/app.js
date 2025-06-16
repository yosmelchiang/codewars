// source: codewars

const log = console.log

// Return the two unique highest values in a list
// The result needs to be in descending order
// Examples
/**
 * [], []
 * [15], [15]
 * [15, 20, 20, 17], [20, 17]
 */

// Solution 1

// We must sort the array
    // we do that using the .sort method and a sorting function for descending order
// We need to only keep uniques
    // We are creating a new array, checking if the current item is already in that array
    // If its not, push it
// We need to make sure we are only left with 2 numbers
    // Only push items to the uniques array that do not already exist there, and for as long as the length of the array is less than 2
    // If its highers than 2, dont push

function twoHighest(arr) {
  const sortedArr = arr.sort((a, b) => b - a)
  const uniques = [];

  for(item of sortedArr) {
    if(!uniques.includes(item) && uniques.length < 2) uniques.push(item);
  }

  return uniques;
}
// log(twoHighest([9, 10, 10, 10, 8])) // [10, 9];
// log(twoHighest([15, 20, 20, 17])) // [20, 17];
// log(twoHighest([15])) // [15];
// log(twoHighest([])) // [];

// Solution 2

// Using filter to sort out uniques
// We filter the array by keeping only the unique indexes of each value
  // duplicate items are those with a different index of the same value
// We use indexOf for this (meaning that if index of the current value is not the same as the first found index of the value in the array, discard it from the filter)


function twoHighestFilter(arr) {
    return arr.filter((value, index) => index === arr.indexOf(value)).sort((a, b) => b -a).slice(0, 2);
}
log(twoHighestFilter([9, 10, 10, 10, 8])) // [10, 9]
log(twoHighestFilter([15, 20, 20, 17])) // [20, 17];
log(twoHighestFilter([15])) // [15];
log(twoHighestFilter([])) // [];