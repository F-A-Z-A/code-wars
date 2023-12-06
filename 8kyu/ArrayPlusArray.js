// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
	let sum = 0;
	let arr3 = [...arr1, ...arr2];
	for (el of arr3) {
		sum += el;
	}
	return sum;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))


//---
// function arrayPlusArray(arr1, arr2) {
// 	return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

//---
// function arrayPlusArray(arr1, arr2) {
// 	let arr = [...arr1, ...arr2];
// 	return arr.reduce((a, b) => a + b);
// }