// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples
//
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
    const alp = ['a', 'e', 'i', 'o', 'u'];
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < alp.length; j++) {
            if (arr[i].toLowerCase() === alp[j]) {
                arr[i] = "!";
            }
        }
    }
    return arr.join("");
}

console.log(replace("!Hi! Hi!"))

// const replace = w => (w.split('').map(e => ['a','e','i','o','u'].includes(e.toLowerCase()) ? '!' : e)).join('');