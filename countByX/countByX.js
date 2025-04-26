// const x = 2;
// const n = 5;

function countBy(x, n) {
  const z = [];
  
  for(let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
    
}

console.log(countBy(2, 5));