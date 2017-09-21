// Return true if num is 10 or 5.
// Otherwise return false.

// Input Example:

// 5
// 10
// 7

// Output Example:

// true
// true
// false

function isTenOrFive(num) {
  console.log(num === 5 || num === 10); //for test results
  return (num === 5 || num === 10);
}
//tests
isTenOrFive(10);
isTenOrFive(22);
isTenOrFive(5);
isTenOrFive(10);

// model solution
function isTenOrFive(num) {
  return num === 10 || num === 5;
}