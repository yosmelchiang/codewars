function evenNumbers(array, number) {
    let even = [];
    let revArr = array.reverse()

    for(let i = 0; i < array.length; i++) {
        if(revArr[i] % 2 === 0 && even.length < number) even.push(array[i])
    }

    return even.reverse();
}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))

// Using .filter to sort by even

function evenNumbersFilter(array, number) {
    // Using .slice...
    // if we define the starting position with a positive number
        // it will slice from from start index 0 and to the end of
    // If we deifne the starting position with a negative number
        // it will move the start index backwards from the end and (x) indexes and slice from there to the end
    return array.filter(n => n % 2 === 0).slice(-number) // returns the last 3 even numbers of the filtered array
}
console.log(evenNumbersFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
