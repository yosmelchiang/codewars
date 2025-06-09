// Write a function that removes the spaces of a string and returns the string without spaces

/**
 * Data sample:
 * "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
 * "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
 * "8aaaaa dddd r     " -> "8aaaaaddddr"
 */

// Imperative
function removeSpaces(str) {
  let result = ''; // Variable where we are going to save characters that are not space

  // Iterate through char save only those that are not space chars
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') result += str[i]
  }

  return result;
}
console.log(removeSpaces('8 j 8   mBliB8g  imjB8B8  jl  B'))

// Declarative
function removeSpacesModern(str) {
  return str.split(' ').filter(char => char !== ' ').join('');
}

// console.log(removeSpacesModern('8 j 8   mBliB8g  imjB8B8  jl  B'))