function trim(str, size) {
    // If the string length is less than or equal to size, return the string as is
    if(str.length <= size ) return str;

    // If the given size is less than or equal to 3, trim the string down to the given size and add the 3 dots
    if(size <= 3) return str.slice(0, size) + '...'

    return str.slice(0, size-3) + '...'
}

console.log(trim('Creating kata is fun', 14))
console.log(trim('He', 1))
console.log(trim("Code Wars is pretty rad", 50))