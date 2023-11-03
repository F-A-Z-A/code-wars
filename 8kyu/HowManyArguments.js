// How many arguments
//
// Description:
// Write a function that returns the number of arguments it received.
// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2


const args_count = (...args_count) => args_count.length;


// -----
// function args_count() {
//     return arguments.length;
// }

// -----
// function args_count(...q) {
//     return q.length;
// }