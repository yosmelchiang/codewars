// Function that converts a name into initials
// Function takes only two words with one space in between
// Output must be two capital letters separated by a dot

/** Examples
 * Sam Harris => S.H
 * patrick feeny => P.F
 */

function abbrevName(name) {
  // Create an empty array that we are going to return at the end
  const initials = [];

  // Validate that name is a string
  if(typeof name !== 'string') {
    return 'Invalid input';
  }

  // Trim name and split it by spaces
  const trimmed = name.trim();
  const names = trimmed.split(' ');

  // Validate that length of names is exactly 2
  if(names.length !== 2) {
    return 'Invalid input';
  }

  // Exctract the initials, capitalize them and push to initials array
  for(const n of names) {
    initials.push(n[0].toUpperCase());
  }

  // Join it by a dot in the middle and return
  return initials.join('.');
}

// console.log(abbrevName('Sam Harris')); // S.H
// console.log(abbrevName('patrick feeny')); // P.F
// console.log(abbrevName('P Bavuzzi')); // P.F
// console.log(abbrevName('  Yos Chiang')); // Y.C

// console.log(abbrevName(123)); // Invalid input
// console.log(abbrevName('Yos')); // Invalid input its just one name we are supposed to have two

module.exports = abbrevName;