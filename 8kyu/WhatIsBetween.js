// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
//     For example:
//
//     a = 1
// b = 4
// --> [1, 2, 3, 4]

const between = (a, b) => {
    const arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr;
}
console.log(between(5, 9))


//---
// function between(a, b) {
//     var all = [];
//     for (a; a <= b; a++) {
//         all.push(a);
//     }
//     return all;
// }