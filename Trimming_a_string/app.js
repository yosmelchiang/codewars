function trim(str, size) {
    // If the string length is less than or equal to size, return the string as is
    if(str.length <= size ) return str;

    // If the given size is less than or equal to 3, trim the string down to the given size and add the 3 dots
    if(size <= 3) return str.slice(0, size) + '...'

    return str.slice(0, size-3) + '...'
}

// Logic
/**
 * If the string is short enough, meaning its less than size equal to size, then it doesnt need trimming, return it as is
 * If the size provided is less than or equal to 3, trim the string down to that size, then add the dots later
 * If the string is greater than 3 and greater than size, trim it it by size - 3 (allowing space for the 3 dots)
 */

console.log(trim('Creating kata is fun', 14))
console.log(trim('He', 1))
console.log(trim("Code Wars is pretty rad", 50))