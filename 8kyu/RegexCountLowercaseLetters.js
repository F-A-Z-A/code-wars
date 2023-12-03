// Description:
//  Your task is simply to count the total number of lowercase letters in a string.
//  Examples
// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26

const lowercaseCount = (str) => {
	let num = 0;
	const alph = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < alph.length; j++) {
			if (str[i] === alph[j]) {
				num++;
			}
		}
	}
	return num;
}
console.log(lowercaseCount('abcdef9278294789yz'));


//---
// function lowercaseCount(str){
//   return (str.match(/[a-z]/g) || []).length
// }