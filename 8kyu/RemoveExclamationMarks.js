// Description:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => s.split('').filter(l => l !== "!").join("");

console.log(removeExclamationMarks("Hello World!"))


// ---
// const removeExclamationMarks = (s) => s.split('!').join('');

// ---
// const removeExclamationMarks = (s) => s.replaceAll('!', '');