// source: codewars

function  calculateAge(dob, year) {  
  let result = '';
  
  if(dob < year) result += `You are ${year-dob} ${year-dob > 1 ? 'years':'year'} old.`
  if(dob > year) result += `You will be born in ${dob - year} ${dob-year > 1 ? 'years':'year'}.`
  if(dob === year) result += 'You were born this very year!'
  
  return result
}

console.log(calculateAge(1992, 2025))
console.log(calculateAge(1992, 1990))
console.log(calculateAge(1992, 1992))