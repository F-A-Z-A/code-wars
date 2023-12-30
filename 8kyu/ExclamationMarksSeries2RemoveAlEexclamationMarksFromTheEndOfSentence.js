// Description:
// Remove all exclamation marks from the end of sentence.
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

const remove = (string) => {
    for (let i = string.length - 1; i > 0; i--) {
        if (string[i] !== '!') {
            break;
        }
        string = string.slice(0, -1);
    }
    return string;
}
console.log(remove("Hi! Hi!"))


//---
// function remove(s){
//     while (s[s.length - 1] === '!') {
//         s = s.slice(0, -1);
//     }
//     return s;
// }