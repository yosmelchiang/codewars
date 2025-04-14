let x = 2
let n = 5

function countBy(x, n) {
    let z = [];
  
    for(let i = 1; i <= n; i++) {
      z.push(x * i)
    }
    return z
    
}

console.log(countBy(x, n));