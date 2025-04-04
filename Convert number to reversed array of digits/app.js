/** 
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 * 35231 => [1,3,2,5,3]
 * 0     => [0]
 */

// Compared to strings, numbers cannot be iterated, these methods dont work on numbers:
// split, length, Array.from

// Solution, we need to convert it to a string, then we can iterate it
const numbers = 324123


function digitize(num) {
    const iteratableNum = num.toString()
    const arr = num > 0 ? [...iteratableNum].reverse() : [0] // We are spreading into an array and reversing it if its a positive number, if not return an array with 0
    return arr
}

console.log(digitize(35231)) // [1, 3, 2, 5, 3]
console.log(digitize(-2324)) // [0]