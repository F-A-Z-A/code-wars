// Description:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9

const squareSum = (numbers) => numbers.reduce((sum, number) => sum + number ** 2, 0);