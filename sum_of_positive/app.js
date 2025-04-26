function sumOfPositives(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      result += arr[i];
    }
  }
  return result;
}

console.log('For loop: ',sumOfPositives([1, -4, 7, 12]));

function sumOfPositivesV2(arr) {
  return arr.filter(n => {return n > 0;}).reduce((acc, curr) => {return acc + curr;}, 0);
}

console.log('filter & reduce: ', sumOfPositivesV2([1, -4, 7, 12]));