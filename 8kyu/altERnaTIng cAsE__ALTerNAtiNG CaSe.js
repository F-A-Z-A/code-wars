// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
//
// Description:
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
//
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
//
// As usual, your function/method should be pure, i.e. it should not mutate the original string.


String.prototype.toAlternatingCase = function () {
	let strNew = '';
	for (let i = 0; i < this.length; i++) {
		if (this[i] === this[i].toUpperCase() && this[i] !== this[i].toLowerCase()) {
			strNew = strNew + this[i].toLowerCase();
		} else {
			strNew = strNew + this[i].toUpperCase();
		}
	}
	return strNew;
}


// -----
// String.prototype.toAlternatingCase = function () {
// 	return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }

// -----
// String.prototype.toAlternatingCase = function () {
// 	return this.split('').map(function(x){
// 		if(x >= 'A' && x <= 'Z') return x.toLowerCase();
// 		if(x >= 'a' && x <= 'z') return x.toUpperCase();
// 		return x;
// 	}).join('');
// }