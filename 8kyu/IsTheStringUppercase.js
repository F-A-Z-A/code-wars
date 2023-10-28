// Is the string uppercase?
//
// Task
// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
//
// In this Kata, a string is said to be in ALL CAPS whenever
// it does not contain any lowercase letter so any string containing
// no letters at all is trivially considered to be in ALL CAPS.

// const string = 'ABUIGTYUBUBIFNEY';
// const arr = string.split('');
// let len = arr.filter(elem => elem !== elem.toUpperCase()).length > 0 ? false : true;
// console.log(len);

// let string = 'ACSKLDFKLDFJSKLDFJ';
// console.log(string === string.toUpperCase() ? true : false);


// -----
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
}

// -----
// String.prototype.isUpperCase = function() {
//     return this == this.toUpperCase() ? true : false;
// }