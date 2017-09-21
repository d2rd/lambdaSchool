// Return true if num is an integer.

// Example Input:

// 0.8
// 1
// -10
 
// Example Output:

// false
// true
// true

// Hint: you can use something like parseInt or Math.floor.

function isInteger(num) {
  console.log(Number.isInteger(num));
  return Number.isInteger(num);}
// tests
isInteger(22.3444);
isInteger(5);
isInteger(4444.3);

// Model Solution
function isInteger(num) {
  return num === parseInt(num);
}