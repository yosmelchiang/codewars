// codewars

const log = console.log;

function newAvg(arr, newavg) {
    // We calculate the sum of all current donations first
    const total = arr.reduce((prev, curr) => prev + curr );
    const result = newavg * (arr.length + 1) - total
    
    return result;
}

log(newAvg([14, 30, 5, 7, 9, 11, 16], 90))
log(newAvg([14, 30, 5, 7, 9, 11, 15], 92))