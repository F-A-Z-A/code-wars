// Merging sorted integer arrays (without duplicates)

// Description:
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

const mergeArrays = (a, b) => {
	const newArr = [...a, ...b].sort((a, b) => a - b);
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === newArr[i + 1]) {
			newArr.splice(i, 1);
			i--;
		}
	}
	return newArr;
}


// -----
// const mergeArrays = (a, b) => {
// 	return [...new Set(a.concat(b))].sort((a, b) => a - b);
// }

// -----
// function mergeArrays(a, b) {
// 	let merge = [...a, ...b].sort()
// 	let unique = new Set(merge)
// 	return Array.from(unique).sort((a,b)=> a-b)
// }