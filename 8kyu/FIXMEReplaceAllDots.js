// Description:
// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.
// Task
// Fix the bug so we can all go home early.
// Notes
// String str will never be null.

const replaceDots = (str) => {
	let newSTR = '';
	for (let symbol of str) {
		symbol === '.' ? newSTR += '-' : newSTR += symbol;
	}
	return newSTR;
}
console.log(replaceDots("one.two.three"))


// ---
// var replaceDots = s=>s.split('.').join('-')

// ---
// const replaceDots = function (str) {
// 	return str.replaceAll(".", "-");
// }