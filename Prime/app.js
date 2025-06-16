// A prime number is a number that has exactly two integers divisors, 1 and itself
// If the number has more than two divisors, 1 and itself, its not prime
const { log } = console;

function isPrime(n) {
  let divisors = [];

  for(let i = 1; i <= n; i++) {
    const divisor = n / i
    if(Number.isInteger(divisor)) divisors.push( divisor )
  }

  return divisors.includes(1) && divisors.includes(n) && divisors.length === 2 ? true:false
}

    log(isPrime(0))
    log(isPrime(1))
    log(isPrime(2))
    log(isPrime(11))
    // log(isPrime(12))
    // log(isPrime(61))
    // log(isPrime(571))
    // log(isPrime(573))
    // log(isPrime(25))