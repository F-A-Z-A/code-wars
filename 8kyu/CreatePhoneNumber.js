// Create Phone Number
//
// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.slice(0, 3) + ')' + ' ' + numbers.slice(3, 6) + '-' + numbers.slice(6, 10);
}

// const createPhoneNumber = (numbers) => {
//     numbers = numbers.join('');
//     return '(' + numbers.slice(0, 3) + ')' + ' ' + numbers.slice(3, 6) + '-' + numbers.slice(6, 10);
// }


// -----
// function createPhoneNumber(numbers) {
//     let format = "(xxx) xxx-xxxx";
//     for (let i = 0; i < numbers.length; i++) {
//         format = format.replace('x', numbers[i]);
//     }
//     return format;
// }

// -----
// function createPhoneNumber(numbers){
//     return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
// }

// -----
// function createPhoneNumber(numbers){
//     numbers.unshift("(");
//     numbers.splice(4, 0, ")", " ");
//     numbers.splice(9, 0, "-");
//     return numbers.join("");
// }