// Given an array of numbers
// Check if any of the numbers are the char codes for lower case vowels (a, e, i, o, u)
// Create a vowel key:value object { number:vowel } using charCodeAt

// Conditions
// If there is a match, change that value with the vowel it represents
// else, just use the value as is

// Methods
// const charCodeAt = var.charCodeAt(0);

// Imperative solution
function isVow(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const codes = {};
    const newArr = [];

    // Create an object with key:value pairs containing charcode:vowel
    for (vIndex in vowels) {
        const charCode = vowels[vIndex].charCodeAt(0)
        const vowel = vowels[vIndex]

        codes[charCode] = vowel
    }

    // Identify the numbres that match each vowel and push the vowel instead
    for (num of arr) {
        if (codes[num]) newArr.push(codes[num])
        else
            newArr.push(num)
    }

    return newArr
}

// Example: [100,100,116,105,117,121]

console.log(isVow([100, 100, 116, 105, 117, 121])) // [ 100, 100, 116, 'i', 'u', 121 ]
console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106])) // 118, 'u', 120, 121, 'u', 98,  122, 'a', 120, 106, 104, 116, 113, 114, 113, 120, 106

