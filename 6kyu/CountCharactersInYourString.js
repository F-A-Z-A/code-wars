// Description:
//
//   The main idea is to count all the occurring characters in a string.
//   If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

// --- 1 ---
function count(str) {
  const alph = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  const obj = {};
  const copyStr = str.split('');
  for (let i = 0; i < alph.length; i++) {
    let num = 0;
    for (let j = 0; j < copyStr.length; j++) {
      if (alph[i] === copyStr[j]) {
        num += 1;
        obj[copyStr[j]] = num;
      }
    }
  }
  return obj;
}

// --- 2 ---
function count(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1;
  }
  return obj;
}