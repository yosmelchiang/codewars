// source: codewars

// add the value "codewars" to the websites array 1,000 times
let websites = []

// Using a for loop
for(let i = 0; i < 1000; i++) {
  websites.push('codewars');
}

// console.log(websites);

// Using rest operator
const newFillArr = [...Array(1000)].fill('codewars');
// console.log(newFillArr);

// Using keybword new
const newNewArr = new Array(1000).fill('codewars');
// console.log(newNewArr);