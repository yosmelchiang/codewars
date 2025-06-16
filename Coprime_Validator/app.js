// source: codewars

// We need to find out if two numbers are coprime
// The inputs will always be two positive integers between 2 and 99

// Using euclidian method to calculate GCD
// if the GCD (Greatest commong divisor) is 1, the numbers are coprime

// GCD(a, b) = GCD(b, a % b);
function findGcd(a, b) {
    while (b !== 0) { // Loop until b is equal to 0
        const temp = b; // Store current b
        b = a % b; // Assign the remainder of a divided by b to b
        a = temp // Assign the old b value to a
    }
    return a; // when b is 0, a holds the gcd
}

function isCoprime(x, y) {
    return findGcd(x, y) === 1;
}

console.log(findGcd(20, 27)) // 1
console.log(isCoprime(20, 27)) // true