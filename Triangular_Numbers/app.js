// Using loops
function triangular(n) {
    // Outer loop > builds each row
    // Inner loop > builds the amount of dots inside each row

    // Empty array
    const arr = [];

    // Row
    for (let i = 0; i < n; i++) {
        const dots = []

        // Dots
        for (let j = 0; j <= i; j++) {
            dots.push('*')
        }

        arr.push(dots)
    }

    return arr.join('').replaceAll(',', '').length
};

// Examples
// console.log(triangular(2)) // 3
// console.log(triangular(4)) // 10
// console.log(triangular(-454)) // 0

// Using one loop
function triangularLoop(n) {
    let result = 0;

    for(let i = 1; i <= n; i++) {
        result += i
    }

    return result;
}

// console.log(triangularLoop(2)) // 3
// console.log(triangularLoop(4)) // 10
// console.log(triangularLoop(-454)) // 0

// Using a while loop
function triangularWhile(n) {
    let result = 0;
    
    while (n > 0) {
        result += n
        n--
    }
    
    return result;
}

// console.log(triangularWhile(2)) // 3
// console.log(triangularWhile(4)) // 10
// console.log(triangularWhile(-454)) // 0

// Using Math
// Triangular formula is n * ( n + 1 ) / 2
function triangularMath(n) {
    return n <= 0 ? 0 : n * (n + 1) / 2
}

// console.log(triangularMath(2)) // 3
// console.log(triangularMath(4)) // 10
// console.log(triangularMath(-454)) // 0