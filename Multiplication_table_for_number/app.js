// source: codewars

// Using strings
function multiTable(number) {
  let table = ''
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${number * i}`
    if(i < 10) table += '\n'
  }
  
  return table
}

console.log(multiTable(5))

// Using an array
function multiTableArray(number) {
  let table = []
  for(let i = 1; i <= 10; i++) {
    table.push(`${i} * ${number} = ${number * i}`)
  }
  return table.join('\n')
}

console.log(multiTableArray(5))