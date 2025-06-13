// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
// 
// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(string) {
    const split = string.split(',');
    return split.length > 2 ? split.slice(1, split.length - 1).join(' ') : null
}


console.log(array("1,2,3")) // 2
console.log(array("1,2,3,4")) // 2 3
console.log(array("1,2,3,4,5")) // 2 3 4

console.log(array("")) // null
console.log(array("1")) // null
console.log(array("1,2")) // null