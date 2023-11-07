// To square(root) or not to square(root)
//
// Description:
//  Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.


function squareOrSquareRoot(array) {
	for (let i = 0; i < array.length; i++) {
		if (Math.sqrt(array[i]) === Math.floor(Math.sqrt(array[i]))) {
			array[i] = Math.sqrt(array[i]);
		} else {
			array[i] = Math.pow(array[i], 2);
		}
	}
	return array;
}


// -----
// function squareOrSquareRoot(array) {
// 	return array.map(x => {
// 		const r = Math.sqrt(x);
// 		return (r % 1 == 0) ? r : (x*x);
// 	});
// }

// -----
// const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

// -----
// function squareOrSquareRoot(array) {
// 	return array.map(x => {
// 		const n = Math.sqrt(x)
// 		return Number.isInteger(n) ? n : x * x
// 	})
// }