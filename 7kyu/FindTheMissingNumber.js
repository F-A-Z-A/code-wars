// Description:
// This question is a variation on the Arithmetic Progression kata
//
// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:
//
// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] === 0) {
      if (nums[i + 1] - nums[i] === 1) continue;
      return nums[i] + 1;
    }
    return 0;
  }
}

// ---
// function missingNo(nums) {
//   return 5050 - nums.reduce((a, b) => a + b, 0)
// }

// ---
// missingNo = (n) => {
//   for (i = 0; i <= 100; i++) {
//     if (!n.includes(i)) {
//       return i
//     }
//   }
// }