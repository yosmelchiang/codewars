// Name Shuffler
// Write a function that returns a new string where the firstname is swapped with the last name

function nameShuffler(str){
  const [ fname, lname ] = str.split(' ');
  return `${lname} ${fname}`;
}

// Array.reverse()
function nameShufflerV2(str) {
  return str.split(' ').reverse().join(' ');
}

module.exports = { nameShuffler, nameShufflerV2};