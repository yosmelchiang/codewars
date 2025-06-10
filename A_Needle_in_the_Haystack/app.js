// Find the "needle"
const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

function findNeedle(haystack) {
  let index = 0;
  for(let i = 0; i <= haystack.length; i++) {
    haystack[i] === 'needle' ? index = i:null
  }
  return `found the needle at position ${index}`
}

// console.log(findNeedle(arr))

// function findNeedleV2(haystack) {
//   return haystack.findIndex(val => val === 'needle')
// }

// console.log(findNeedleV2(arr))

function findNeedleV3(haystack) {
  return haystack.indexOf('needle')
}

console.log(findNeedleV3(arr))