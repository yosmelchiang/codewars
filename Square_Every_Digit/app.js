function squareDigits(num) {
    const stringNr = num.toString()
    let str = '';
    
    for (let i = 0; i < stringNr.length; i++) {
        str += stringNr[i] ** 2
    }
    return +str
}

console.log(squareDigits(9119))