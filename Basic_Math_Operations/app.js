// source: codewars

// Your task is to create a function that does four basic mathematical operations.
// 
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {

    const obj = {
        sum: operation === '+' ? value1 + value2 : 0,
        sub: operation === '-' ? value1 - value2 : 0,
        mult: operation === '*' ? value1 * value2 : 0,
        div: operation === '/' ? value1 / value2 : 0,
    }

    for (op in obj) {
        if (obj[op]) return obj[op]
    }

    return 0
}

// console.log(basicOp('+', 3, 2)) // 5
// console.log(basicOp('-', 3, 2)) // 1
// console.log(basicOp('*', 3, 2)) // 6
// console.log(basicOp('/', 3, 2)) // 1.5
// console.log(basicOp('+', 3, 2)) // 1.5

// Other examples

// console.log(basicOp("+", 4, 7)) // 11
// console.log(basicOp("-", 15, 18)) // -3
// console.log(basicOp("*", 5, 5)) // 25
// console.log(basicOp("/", 49, 7)) // 7

function basicOpTernary(operation, value1, value2) {
  return  operation == '+' ? value1 + value2 :
          operation == '-' ? value1 - value2 :
          operation == '*' ? value1 * value2 :
          operation == '/' ? value1 / value2 : 'Wrong Operation';
}

console.log(basicOpTernary("+", 4, 7)) // 11
console.log(basicOpTernary("-", 15, 18)) // -3
console.log(basicOpTernary("*", 5, 5)) // 25
console.log(basicOpTernary("/", 49, 7)) // 7