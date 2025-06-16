// source: codewars

// Clock shows h hours, m minutes and s seconds after midnight (00:00:00)
// Write a function which returns the time since midnight in milliseconds
/** Examples
 * 
 * h = 0 = 0
 * m = 1 = 60000
 * s = 1 = 1000 miliseconds
 * 
 * result: 61000
 */

/** Input Constraints
 * 0 <= h <= 23 = written in math: it means greater than or equal to 0, less than or equal to 23
 * 0 <= m <= 59
 * 0 <= s <= 59
 */

// const h = 1
// const m = 0
// const s = 1

// console.log((h * 60 * 60 * 1000) + (m * 60 * 1000) + s*1000)
// 1 time * 60 = 60 min, * 60 = 3600 sekunder * 1000 =  3 600 000 millisekunder

function past(h, m, s) {
  if(
    typeof h !== 'number' || h < 0 || h > 23 ||
    typeof m !== 'number' || m < 0 || m > 59 ||
    typeof s !== 'number' || s < 0 || s > 59
  ) {
    throw new Error('Invalid input');
  }
  return (h * 60 * 60 * 1000) + (m * 60 * 1000) + ( s*1000 );
}

module.exports = past;