// Return a string of all the even numbers between 0 and num inclusive.

    // Example Input:

      // 7
      // 12
      // 25

    // Example Output:

      // 0246
      // 024681012
      // 024681012141618202224

// Note: 0 is an even number

function stringOfEvens(num) {
  let string = '';
  for (let i = 0; i <= num; i++) {
    if(i % 2 === 0) string += i;
  }
  return string;
}
stringOfEvens(34);

//Works but Will not pass because '|' is into included in test 'expect' assertion.
function stringOfEvens(num) {
  var string = '';

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) string += i  + '|';
  }
  return string;
}
console.log(stringOfEvens(14));

