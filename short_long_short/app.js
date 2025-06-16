// source: codewars

function solution(a, b){
  let result = '';
  if(a.length < b.length) {
    result += a+b+a;
  } else {/*  */
    result += b+a+b;
  }
  return result;
}

function solutionV2(a, b){
  return a.length < b.length ? a+b+a:b+a+b;
}

// console.log(solution('22', '1')) // 1221
// console.log(solution('1', '22')) // 1221
// console.log(solution('13', '200')) // 1320013
// console.log(solution('Soon', 'Me')) // MeSoonMe
// console.log(solution('Soon', 'Me')) // MeSoonMe
// console.log(solution('U', 'False')) // UFalseU

console.log(solutionV2('22', '1')); // 1221
console.log(solutionV2('1', '22')); // 1221
console.log(solutionV2('13', '200')); // 1320013
console.log(solutionV2('Soon', 'Me')); // MeSoonMe
console.log(solutionV2('Soon', 'Me')); // MeSoonMe
console.log(solutionV2('U', 'False')); // UFalseU