// Description:
//
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending),
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
//
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest1(s1, s2) {
  const arr = (s1 + s2).split('')
  return arr
    .filter((item, index) => arr.indexOf(item) === index)
    .sort((a, b) => a.localeCompare(b))
    .join('')
}

function longest2(s1, s2) {
  return [...new Set((s1 + s2))].sort().join('');
}