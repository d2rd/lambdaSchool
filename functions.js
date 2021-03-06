// using approach from this video tutorial
// this method encapsulates all the code in this file
// within module.exports = { }

// bds: please install eslint and use it for consistent formatting
// bds: see this for reference:
// bds: https://github.com/flyrightsister/eslint-atom-install

// bds: the following comment is not terribly useful. Better to omit the comment,
// bds: or, even better, write a comment that tells what data types the function
// bds: takes as parameters, and what data type it returns
//isInRange

// bds: Since you want to return true if (num < 50 && num > 20) is true, and
// bds: false if (num < 50 && num > 20) is false, you can replace the whole
// bds: conditional (if-then-else) with returning the boolean expression:
// bds: "return (num < 50 && num > 20)"
// bds: You used this technique well in isTenOrFive
function isInRange(num) {
if (num < 50 && num > 20) {
  return(true);
} else {
  return(false);
}
}

// bds: this file should not be running functions; its purpose is only to declare
// bds: functions.
isInRange(44);



//isPrime
function isPrime(num) {
  if (num === 0 || num === 1){
    return false;
  }
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;

  // bds: it's not necessary to compare the number to 1 here; you've already
  // bds: returned false if the number is 1 from the first conditional in this
  // bds: function. It would suffice to return true here.
  return num !== 1;
}
  // console.log(isprime(37));
  //tests

//isTenOrFive
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

  // bds: remove the console.log for finished work
  console.log(num === 5 || num === 10); //for test results

  // bds: this is a great example of returning the boolean expression rather than
  // bds: using a conditional
  return (num === 5 || num === 10);
}

// bds: these should be moved to the tests file.
//tests
isTenOrFive(10);
isTenOrFive(22);
isTenOrFive(5);
isTenOrFive(10);

// model solution
// bds: here you've redefined isTenOrFive. Make sure you have only one definition
// bds: in finished work.
function isTenOrFive(num) {
  return num === 10 || num === 5;
}

//addItemToArray
    // Add item to the end of arr and return the array.

    // Input Example:

    // [1, 2, 3], 4
    // [true], false
    // ['Hello'], 'world!'

    // Output Example:

    // [1, 2, 3, 4]
    // [true, false]
    // ['Hello', 'world!']


function addItemToArray(arr, item) {
  arr.push(item);
  return(arr);
}

// bds: remove this for finished work
addItemToArray(['coconut', 'peach', 'kiwi'], 'apple');



module.exports = {isInRange, isPrime, isTenOrFive, addItemToArray}
