// source: codewars

// We want a function that removes duplicates from an array
  // The number have to be non negative
  // The list without duplicates have to be removed

function distinct(a) {
  const arr = [];

  for(let i = 0; i < a.length; i++) {
    if(!arr.includes(a[i])) arr.push(a[i])
  }

  return arr;
}

console.log(distinct([1, 1, 2]));
console.log(distinct([1, 2, 1, 1, 3, 2]));