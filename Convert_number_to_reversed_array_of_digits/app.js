/** 
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 * 35231 => [1,3,2,5,3]
 * 0     => [0]
 */

// Compared to strings, numbers cannot be iterated, these methods dont work on numbers:
// split, length, Array.from

// Solution, we need to convert it to a string, then we can iterate it
const numbers = 324123
const stringOfNums = numbers.toString()

// Imperative
function digitizeImperative(num) {
    const iteratableNum = num.toString();
    const numberArr = iteratableNum.split('')
    const reversedNumberArr = [];

    for (let i = 0; i < iteratableNum.length; i++) {
        reversedNumberArr.push(Number(numberArr.pop())) // Converting the items we are pushing to the array to numbers
    }
    return num > 0 ? reversedNumberArr : [0]
}

console.log('Imperative', digitizeImperative(35231))
console.log('Imperative', digitizeImperative(-123)) // Returning [0] if its a negative number

// This solution worked, but not 100% because we are popping the array that is shrinking everytime and i gets to the point where its equal to the length of the array and stops halfway
// function digitizeImperative(num) {
//     const iteratableNum = num.toString();
//     const numberArr = iteratableNum.split('')
//     const reversedNumberArr = [];

//     for (let i = 0; i < numberArr.length; i++) {
//         reversedNumberArr.push(numberArr.pop())
//     }
//     return reversedNumberArr
// }

// console.log(digitizeImperative(35231))

// Declarative
function digitizeDeclarative(num) {
    const iteratableNum = num.toString()
    const arr = num > 0 ? [...iteratableNum].reverse() : [0] // We are spreading into an array and reversing it if its a positive number, if not return an array with 0
    return arr
}

console.log('Declarative: ', digitizeDeclarative(35231)) // [1, 3, 2, 5, 3]
console.log('Declarative: ', digitizeDeclarative(-2324)) // [0]